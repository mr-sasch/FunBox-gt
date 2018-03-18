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
  node.classList.toggle('selected');
}
