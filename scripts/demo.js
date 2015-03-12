var content = document.getElementById('content');

var sideBarL = document.getElementById('side-bar-left');
var fadeAwayBtnL = document.querySelector('#side-bar-left input');

var fadeInBtnL = document.querySelectorAll('#content input')[0];
var fadeInBtnR = document.querySelectorAll('#content input')[1];

var sideBarR = document.getElementById('side-bar-right');
var fadeAwayBtnR = document.querySelector('#side-bar-right input');

fadeInBtnL.onclick = function(event) {
  content.style.marginLeft = '400px';
  sideBarL.style.left = '0px';
};
fadeAwayBtnL.onclick = function(event) {
  content.style.marginLeft = '0px';
  sideBarL.style.left = '-400px';
};

fadeInBtnR.onclick = function(event) {
  content.style.marginRight = '400px';
  sideBarR.style.right = '0px';
};
fadeAwayBtnR.onclick = function(event) {
  content.style.marginRight = '0px';
  sideBarR.style.right = '-400px';
};
