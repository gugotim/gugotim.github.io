var intervalid;//循环滑动函数Id，用于完成时取消
window.onload = function() {
  // handleHeight();
  setTimeout(handleDoor, 1500);
  handleSidebar();
  handleSwitch();
  goNext();
}
function goNext() {
  var btns = document.querySelectorAll('.goNext');
  for(var i=0, len=btns.length; i<len; i++) {
    btns[i].onclick = function(event) {
      var content = document.querySelector('#content');
      var footer = document.querySelector('footer');
      var intro = document.querySelector('#intro');
      var distance;
      if(event.target.parentNode == footer) {
        distance = document.body.scrollTop;
        intervalid = setInterval(function() {
          distance -= scrollUp(distance);
        }, 1);
      } else if(event.target.parentNode.id == 'intro') {
        distance = footer.offsetTop - document.body.scrollTop;
        intervalid = setInterval(function(){ 
          distance -= scrollDown(distance);
        }, 10);
      } else if(event.target.parentNode.id == 'content') {
        distance = intro.offsetTop - document.body.scrollTop;
        intervalid = setInterval(function(){ 
          distance -= scrollDown(distance);
        }, 10);
      } else {
        alert('未识别');
      }
    }
  }
}
function scrollUp(distance) {
  var scrollTop = document.body.scrollTop;
  var gap = 0;
  if(distance >= 0 && distance>= 10) {
    document.body.scrollTop = scrollTop - 10;
    distance -= 10;
    gap = 10;
  } else if(distance>0 && distance <10) {
    document.body.scrollTop = scrollTop - 1;
    distance -= 1;
    gap = 1;
  } else {
    window.clearInterval(intervalid);
  } 
  return gap;  
}
function scrollDown(distance) {
  var scrollTop = document.body.scrollTop;
  var gap = 0;
  if(distance > 0 && distance>= 10) {
    document.body.scrollTop = scrollTop + 10;
    distance -= 10;
    gap = 10;
  } else if(distance>0 && distance <10) {
    document.body.scrollTop = scrollTop + 1;
    distance -= 1;
    gap = 1;
  } else {
    window.clearInterval(intervalid);
  } 
  return gap;       
}
function handleHeight() {
  var content = document.querySelector('#content');
  var sidebar = document.querySelector('#main sidebar');
  var height = window.innerHeight + 'px';
  alert(height);
  content.style.height = height;
  sidebar.style.height = height;
}
function handleSwitch() {
  var btn = document.querySelector('#switch');
  turnoffLight();
  btn.onclick = function(event) {
    if(btn.dataset.state == 'on') {
      turnoffLight();
      btn.dataset.state = 'off';
    } else if(btn.dataset.state == 'off') {
      turnonLight();
      btn.dataset.state = 'on';
    } else {
      turnonLight();
      btn.dataset.state = 'on';
      var sidebarbtn = document.querySelector('#wrapper div.mybtn');
      hideSideBar();
      sidebarbtn.dataset.state = 'hide';
    }
  }
}
function turnoffLight() {
  var content = document.querySelector('#content');
  var sidebar = document.querySelector('#main sidebar');
  content.style.backgroundColor = 'darkblue';
  sidebar.style.backgroundColor = 'darkgreen';
}
function turnonLight() {
  var content = document.querySelector('#content');
  var sidebar = document.querySelector('#main sidebar');
  content.style.backgroundColor = 'lightblue';
  sidebar.style.backgroundColor = 'lightgreen';  
}
function handleDoor() {
  var leftDoor = document.querySelector('#leftDoor');
  var rightDoor = document.querySelector('#rightDoor');
  leftDoor.style.left = '-50%';
  rightDoor.style.right = '-50%';
}
function handleSidebar() {
  var btn = document.querySelector('#wrapper div.mybtn');
  btn.dataset.state = 'show';
  btn.onclick = function(event) {
    if(btn.dataset.state == 'show') {
      hideSideBar();
      btn.dataset.state = 'hide';
    } else {
      showSideBar();
      btn.dataset.state = 'show';
    }
  };
}
function showSideBar() {
  var content = document.querySelector('#content');
  var sidebar = document.querySelector('#main sidebar');
  sidebar.style.left = '0';
  content.style.left = '25%';  
}
function hideSideBar() {
  var content = document.querySelector('#content');
  var sidebar = document.querySelector('#main sidebar');
  sidebar.style.left = '-25%';
  content.style.left = '0';
}