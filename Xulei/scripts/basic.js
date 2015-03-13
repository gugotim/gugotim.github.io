handleNavigator();
function handleNavigator() {
  var content = document.querySelector('section.content');
  var goLeft = document.getElementById('goLeft');
  var goRight = document.getElementById('goRight');
  content.dataset.curElement = 'content';
  goLeft.onclick = function(event) {
    event.preventDefault();
    var curElement = content.dataset.curElement;
    switch(curElement) {
      case 'content':{
        showFun();break;
      }
      case 'code': {
        hideCode();break;
      }
      default: {}
    }
  };
  goRight.onclick = function(event) {
    event.preventDefault();
    var curElement = content.dataset.curElement;
    switch(curElement) {
      case 'content':{
        showCode();break;
      }
      case 'fun': {
        hideFun();break;
      }
      default: { }
    }
  };
}
function showCode() {
  var content = document.querySelector('section.content');
  var code = document.querySelector('section.code');
  content.dataset.curElement = 'code';
  code.style.left = '0';
  code.style.zIndex = '1';
  var goRight = document.getElementById('goRight');
  goRight.setAttribute('disabled', 'disabled');
}
function hideCode() {
  var content = document.querySelector('section.content');
  var code = document.querySelector('section.code');
  content.dataset.curElement = 'content';
  code.style.left = '-100%';
  var goRight = document.getElementById('goRight');
  goRight.removeAttribute('disabled');
  var goLeft = document.getElementById('goLeft');
  goLeft.removeAttribute('disabled');
}
function showFun() {
  var content = document.querySelector('section.content');
  var fun = document.querySelector('section.fun');
  content.dataset.curElement = 'fun';
  fun.style.right = '0';
  fun.style.top = '200px';
  fun.style.zIndex = '1';
  var goLeft = document.getElementById('goLeft');
  goLeft.setAttribute('disabled', 'disabled');
}
function hideFun() {
  var content = document.querySelector('section.content');
  var fun = document.querySelector('section.fun');
  content.dataset.curElement = 'content';
  fun.style.right = '-100%';
  var goRight = document.getElementById('goRight');
  goRight.removeAttribute('disabled');
  var goLeft = document.getElementById('goLeft');
  goLeft.removeAttribute('disabled');
}
