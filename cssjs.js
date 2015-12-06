  var storage = {};
  var elements = document.querySelectorAll('.moveBox');

  for(var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('mousedown', function(e) {
  storage.target = e.target;
  storage.offsetX = e.clientX - storage.target.offsetLeft; // enlève la valeur de gauche par rapport à la page
  storage.offsetY = e.clientY - storage.target.offsetTop;; //enlève la valeur haut par rapport à la page
//console.log(e);
  }, false);

  elements[i].addEventListener('mouseup', function() {
    storage = {};
  }, false);
}

document.addEventListener('mousemove', function(e) {
if (storage.target) {
  storage.target.style.top = e.clientY - storage.offsetY + 'px';
  storage.target.style.left = e.clientX - storage.offsetX + 'px';
  }
}, false);
