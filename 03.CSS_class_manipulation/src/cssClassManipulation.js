var cssClass = (function() {
  'use strict';
  var container = {
    add: add,
    remove: remove,
    toggle: toggle,
    has: has
  };

  function add(htmlElement, newClass) {
    if (!has(htmlElement, newClass)) {
      htmlElement.className += ' ' + newClass;
    }
  }

  function remove(htmlElement, target) {
    var classes = htmlElement.className.split(' ');
    var targetIndex = classes.indexOf(target);
    if (targetIndex > -1) {
      classes.splice(targetIndex, 1);
      htmlElement.className = classes;
    }
  }

  function toggle(htmlElement, target) {
    if (has(htmlElement, target)) {
      remove(htmlElement, target);
    } else {
      add(htmlElement, target);
    }
  }

  function has(htmlElement, target) {
    var temp = htmlElement.className.split(' ');
    var targetIndex = temp.indexOf(target);
    if (temp[targetIndex] === target) {
      return true;
    } else {
      return false;
    }
  }

  return container;
})();