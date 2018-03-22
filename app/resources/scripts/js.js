var items = document.getElementById('items');
var currentElem;

items.onclick = function(event) {

  var target = event.target;
  while(target!=this) {
    if(target.classList.contains('ended')) return;
    if(target.classList.contains('item')) break;
    target = target.parentNode;
  }
  if(target == this) return;

  target.classList.add('not-hover');
  target.classList.toggle('selected');
  currentElem = target;
}

items.onmouseout = function(event) {
  if(!currentElem) return;

  var relatedTarget = event.relatedTarget;
  if(relatedTarget) {
    while (relatedTarget) {
      if(relatedTarget == currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
  }
  currentElem.classList.remove('not-hover');
}
