//----- main ----------------//
addLoadEvent(handleLinks);
//----- functions ----------//
function handleLinks() {
  var links = document.getElementById('greetings').getElementsByTagName('a'),
    len = links.length;
  for(var i=0; i<len; i++) {
    handleDialog(links[i]);
    handleLink(links[i]);
  }
}
function handleLink(element) {
  EventUtil.addHandler(element, 'click', function(event) {
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
    var target = EventUtil.getTarget(event);
    window.open(target.href);
  });
}
function handleDialog(element) {
  EventUtil.addHandler(element, 'mouseover', function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    showDialog(target);
  });
  EventUtil.addHandler(element, 'mouseout', function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    hideDialog(target);
  });
}
function showDialog(target) {
  var dialog = document.getElementById('dialog');
  target.appendChild(dialog);
  dialog.style.display = 'inline-block';
  dialog.getElementsByTagName('p')[0].innerHTML = '你想去' + target.href;
}
function hideDialog(target) {
  var dialog = document.getElementById('dialog');
  document.body.appendChild(dialog);
  dialog.style.display = 'none';
  dialog.getElementsByTagName('p')[0].innerHTML = '';
}
