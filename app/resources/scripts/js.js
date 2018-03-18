var items = document.getElementById('items');

items.onclick = function(event) {

  var target = event.target;
  while (target != this) {
    if (target.className == 'item' || target.className == 'item selected') {
      highlight(target);
      return;
    }
    target = target.parentNode;
  }

}

function highlight(node) {
  var elem = node.classList;
  elem.toggle('selected');
}


// ховер
items.onmouseenter = function() {
  document.body.style.pointerEvents = 'none';
  return;
}
items.onmouseleave = function() {
  document.body.style.pointerEvents = 'initial';
  return;
}
