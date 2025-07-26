export class DomModel<T extends HTMLElement> {
  private element: T;

  constructor(tag = 'div') {
    this.element = document.createElement(tag) as T;
  }

  addClass(className: string) {
    this.element.classList.add(className);
  }

  addEvent(type: string, callback: (event: any) => void) {
    this.element.addEventListener(type, callback);
  }

  append(dom: DomModel<T>) {
    const element = dom.get();
    this.element.append(element);
  }

  get() {
    return this.element;
  }

  setAttr(name: string, value: string | number) {
    this.element.setAttribute(name, value.toString());
  }

  setContent(content: string) {
    this.element.innerHTML = content;
  }

  setCss(style: string) {
    this.element.style.cssText = style;
  }

  setStyle<K extends keyof CSSStyleDeclaration>(
    name: K,
    value: CSSStyleDeclaration[K],
  ) {
    this.element.style[name] = value;
  }
}
