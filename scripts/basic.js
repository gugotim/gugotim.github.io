
function handleLinks() {
  var dialog = document.getElementById('dialog');
  var links = document.getElementById('greetings').getElementsByTagName('a'),
    len = links.length;
  for(var i=0; i<len; i++) {
    links[i].addEventListener('mouseover', function(event) {
      event.target.appendChild(dialog);
      dialog.style.display = 'inline-block';
      dialog.getElementsByTagName('p')[0].innerHTML = '你想去' + event.target.href;
    }, false);
    links[i].addEventListener('mouseout', function(event) {
      dialog.style.display = 'none';
    }, false);
  }
}
window.onload = handleLinks;
