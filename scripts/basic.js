//-------------------main------------------/
addLoadEvent(handleNavigator);
// addLoadEvent(getBlog);
addLoadEvent(handleDialog);
addLoadEvent(popUp);
addLoadEvent(handleLinks);
//-------------------functions------------------/
function handleLinks() {
  var links = document.getElementsByTagName('a'),
    len = links.length;
  for(var i=0; i<len; i++) {
    if(links[i].id != 'close') {
      EventUtil.addHandler(links[i], 'click', function(event) {
        event.preventDefault();
        window.open(this.href);
      });      
    }

  }
}
function popUp() {
  var pop = document.getElementById('popup');
  setTimeout(function(){
    pop.style.top = '0';
  }, 1000);
  setTimeout(function(){
    pop.style.top = '-50px';
  }, 4000);  
}
function handleDialog() {
  var imgs = document.querySelectorAll('section.content img'),
    len = imgs.length;
  for(var i=0; i<len; i++) {
    handleShowDialog(imgs[i]);
  }
  handleClose();
}
function handleShowDialog(img) {
  img.onclick = function() {
    var div = document.getElementById('dialog');
    var imgHolder = document.querySelector('#dialog div>img');
    imgHolder.src = img.src;
    imgHolder.onclick = function(event) {
      var src = imgHolder.src;
      if(src.search('UIHomeWork') != -1) {
        window.open('UIHomeWork/index.html');
      } else if(src.search('asp') != -1) {
        window.open('http://github.com/gugotim/asp.net');
      }
    };
    div.style.display = 'block';
  };
}
function handleClose() {
  var div = document.getElementById('dialog');
  var close = document.getElementById('close');
  close.onclick = function(event) {
    event.preventDefault();
    div.style.display = 'none';
  };
}
function getBlog() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(!document.querySelector('section.content p')) return;
    if(xhr.readyState == 4 ) {
      if(xhr.status >= 200 && xhr.status <=300 || xhr.status == 304) {
        document.querySelector('section.content p').innerHTML = xhr.responseText;
      } else {
        document.querySelector('section.content p').innerHTML = 'ajax读取失败';
      }
    }
  };
  xhr.open('get', 'blogs/2015-3-15', true);
  xhr.send();
}
function handleNavigator() {
  var content = document.querySelector('section.content');
  var goLeft = document.getElementById('goLeft');
  var goRight = document.getElementById('goRight');
  content.dataset.curElement = 'content';
  EventUtil.addHandler(goLeft, 'click' ,function(event) {
    event = EventUtil.getEvent(event);
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
  });
  EventUtil.addHandler(goRight, 'click' ,function(event) {
    event = EventUtil.getEvent(event);
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
  });
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
    element.style.top = '350px';
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
