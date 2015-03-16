addLoadEvent(addClass);
addLoadEvent(handleRemove);
addLoadEvent(showDialog);
function addClass() {//给资源里的列表项的X号（a链接）添加remove类用于添加事件处理程序
  var resources = searchByClass(document,'resource-items', 'ul');
    resLen = resources.length;
  for(var i=0; i<resLen; i++) {
    var items = resources[i].getElementsByTagName('a'),
      remLen = items.length;
    for(var j=0; j<remLen; j++) {
      items[j].className = 'remove';
    }
  }
}
function handleRemove() {//选择可删除资源项的a链接，从而添加点击删除事件
  var removeItems = searchByClass(document, 'remove','a'),
    len = removeItems.length;
  for(var i=0; i<len; i++) {
    removeItemsHandler(removeItems[i]);
  }
}
function searchByClass(element, className, tagName) {//以防不支持getElementsByClassName
  if(element.getElementsByClassName) {
    return element.getElementsByClassName(className);
  } else {
    var tags= element.getElementsByTagName(tagName);  //获取指定元素
    var tagAll = [];     //这个数组用于存储所有符合条件的元素
    for(var i=0; i<tags.length; i++) {     //遍历获得的元素
     if (tags[i].className == className) {     //如果获得的元素中的class的值等于指定的类名，就赋值给tagnameAll
       tagAll.push(tags[i]);
     }
    }
    return tagAll;
  }
}
function showDialog() {
  var addBtns = searchByClass(document, 'add', 'a'),
    len = addBtns.length;
  for(var i=0; i<len; i++) {
    showDialogHandler(addBtns[i]);
  }
  handleCancel();
  handleAdd();
}
function handleAdd() {//给添加资源按钮 添加事件处理
  var submit = document.getElementById('submit');
  var input = document.getElementById('resource-text');
  EventUtil.addHandler(submit, 'click', function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
    EventUtil.stopPropagation(event);
    var result = verify(input.value);
    if(result){
      for(var value in result) {
        var img = document.createElement('img');
        img.src = 'png/glyphicons-198-remove.png';
        var a = document.createElement('a');
        a.className = 'remove';
        a.href = '#';
        var li = document.createElement('li');
        var text = document.createTextNode(result[value] + ' ');
        li.appendChild(text);
        a.appendChild(img);
        li.appendChild(a);
        var item = submit.parentNode.parentNode.parentNode.parentNode;//获取Item类，即包含整个矩形框
        var ul = searchByClass(item, 'resource-items', 'ul')[0];
        ul.appendChild(li);
        removeItemsHandler(a);
        hide();
      }
    }
  });
}
function verify(value) {//对添加资源的文本框进行验证并返回逗号分割数组
  return value.split(',');
}
function handleCancel(){//给close按钮添加事件处理
  var close = document.getElementById('close');
  EventUtil.addHandler(close, 'click', function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
    EventUtil.stopPropagation(event);
    hide();
  });
}
function removeItemsHandler(item) {//点击X号（a链接）删除资源项事件
  EventUtil.addHandler(item, 'click', function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
    EventUtil.stopPropagation(event);
    var li = item.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
  }, false);
}
function showDialogHandler(btn) {//根据点击的按钮显示对话框事件
  EventUtil.addHandler(btn, 'click', function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
    EventUtil.stopPropagation(event);
    show(btn);
  }, false);
}
function show(btn) {//显示对话框，对话框为absolute,其父级元素为relative,
  var dialog = document.getElementById('dialog');
  dialog.style.display = "block";
  btn.appendChild(dialog);
  var input = document.getElementById('resource-text');
  input.focus();
}
function hide() {//关闭对话框，实为display:none
  var dialog = document.getElementById('dialog');
  dialog.style.display = "none";
  var input = document.getElementById('resource-text');
  input.value = '';
}
