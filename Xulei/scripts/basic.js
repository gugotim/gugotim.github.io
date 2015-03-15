//-------------------main------------------/
addLoadEvent(handleNavigator);
addLoadEvent(getBlog);
//-------------------functions------------------/
function getBlog() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 ) {
      if(xhr.status >= 200 && xhr.status <=300 || xhr.status == 304) {
        document.querySelector('section.content p').innerHTML = xhr.responseText;
      } else {
        document.querySelector('section.content p').innerHTML = 'ajax读取失败';
      }
    }
  };   
  // xhr.open('get', 'blogs/2015-3-15', true);
  xhr.open('get','https://api.github.com/repos/gugotim/summary/Http', true);
  // xhr.setRequestHeader('Access-Control-Allow-Origin','http://gugotim.github.io/Xulei');
  xhr.send();
}
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
        showSection('fun');
        disableButton('goLeft', true);
        disableButton('goRight', false);
        break;
      }
      case 'code': {
        hideSection('code');
        disableButton('goLeft', false);
        disableButton('goRight', false);
        break;
      }
      default: {}
    }
  };
  goRight.onclick = function(event) {
    event.preventDefault();
    var curElement = content.dataset.curElement;
    switch(curElement) {
      case 'content':{
        showSection('code');
        disableButton('goRight', true);
        disableButton('goLeft', false);
        break;
      }
      case 'fun': {
        hideSection('fun');
        disableButton('goRight', false);
        disableButton('goLeft', false);
        break;
      }
      default: { }
    }
  };
}
function disableButton(id, disabled) {
  var element = document.getElementById(id);
  if(!element) return false;
  if(disabled) {
    element.setAttribute('disabled', 'disabled');
  } else {
    element.removeAttribute('disabled');
  }
}
function showSection(className) {
  var element = document.querySelector('section.' + className);
  var content = document.querySelector('section.content');
  if(!element) return false;
  content.dataset.curElement = className;
  if(className === 'code') {
    element.style.left = '0';
    element.style.zIndex = '1';
  } else if(className === 'fun') {
    element.style.right = '0';
    element.style.top = '200px';
    element.style.zIndex = '1';
  }
}
function hideSection(className) {
  var element = document.querySelector('section.' + className);
  var content = document.querySelector('section.content');
  if(!element) return false;
  content.dataset.curElement = 'content';
  if(className === 'code') {
    element.style.left = '-100%';
  } else if(className === 'fun') {
    element.style.right = '-100%';
  }
}
