function cssProp(htmlElement, cssProperty, value) {
  'use strict';
  if (typeof cssProperty === 'string' && arguments.length === 3) {
    // set css
    htmlElement.style[cssProperty] = value;
    return htmlElement.style[cssProperty];
  } else 
  if (typeof cssProperty === 'string' && arguments.length === 2) {
    // get css
    return htmlElement.style[cssProperty];
  } else
  if (typeof cssProperty === 'object') {
    // set multiple properties
    for (var key in cssProperty) {
      htmlElement.style[key] = cssProperty[key];
    }
  }
}