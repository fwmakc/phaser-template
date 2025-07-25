export function createDom<T extends HTMLElement>(tag: string, style = '') {
  const dom = document.createElement(tag || 'div');

  if (style) {
    dom.style.cssText = style;
  }

  return dom as T;
}
