var dom = function(){};

dom.remove = remove;
dom.append = append;
dom.prepend = prepend;
dom.after = after;
dom.before = before;
dom.val = val;

function remove(target) {
  if (!target || !target.parentNode) { return; }
  target.parentNode.removeChild(target);
}

function append(targetElement, newElement) {
  targetElement.appendChild(newElement);
}

function prepend(targetElement, newElement) {
  targetElement.insertBefore(newElement, targetElement.firstChild);
}

function after(targetElement, newElement) {
  if (!targetElement || !targetElement.parentNode) { return; }
  targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
}

function before(targetElement, newElement) {
  targetElement.parentNode.insertBefore(newElement, targetElement);
}

function val(element) {
  return element.value;
}
