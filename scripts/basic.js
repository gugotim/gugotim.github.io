//----- main ----------------//
addLoadEvent(handleLinks);
addLoadEvent(handleNavigation);
//----- functions ----------//
function handleNavigation() {
  var goLeft = document.getElementById('go-left');

  goLeft.onclick = function(event) {
    var code = document.getElementById('code');
    var left = document.defaultView.getComputedStyle(code, null).left;
    if(left !== '0px') {//不为0，即小于0，未显现
      code.style.left = '0';
    } else {
      code.style.left = '-240px';
    }
  };
}
function handleLinks() {
  var links = document.querySelectorAll('#greetings p a'),
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
