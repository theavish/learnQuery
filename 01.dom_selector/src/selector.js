var domSelector = function(selectors) {
  'use strict';

  var reAnyLetter = new RegExp(/^[a-zA-Z]+$/);
  var node;

  if (!selectors) {
    return [];
  } else
  if (selectors[0] === '.') {
    node = document.getElementsByClassName(selectors.slice(1))[0];
    console.log('Class:', selectors, '\nNode:', node);
    return [node];
  } else
  if (selectors[0] === '#') {
    node = document.getElementById(selectors.slice(1));
    console.log('Id:', selectors, '\nNode:', node);
    return [node];
  } else
  if (selectors[0].match(reAnyLetter)) {
    node = document.getElementsByTagName(selectors)[0];
    console.log('Tag:', selectors, '\nNode:', node)
    return [node];
  } else {
    throw new TypeError('Invalid Selector Used.')
  }
};