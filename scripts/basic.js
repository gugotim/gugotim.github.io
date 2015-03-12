var header = document.querySelector('#wrapper header');
var content = document.getElementById('content');
alert(window.getComputedStyle(header, 'height'));
alert(window.innerHeight);
// content.style.height = (document.body.clientHeight - header.style.height) + 'px';
