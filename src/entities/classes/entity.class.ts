export class EntityClass {
  protected container!: HTMLElement;

  constructor() {
    this.createContainer();
  }

  protected createDom<T extends HTMLElement>(tag: string, style = '') {
    const dom = document.createElement(tag || 'div');

    if (style) {
      dom.style.cssText = style;
    }

    return dom as T;
  }

  private createContainer() {
    this.container = this.createDom(
      'section',
      `
        background-color: transparent;
        height: 100%;
        overflow: hidden;
        padding: 0px;
        width: 100%;
        top: 0;
        left: 0;
      `,
    );
  }

  getContainer() {
    return this.container;
  }

  addToContainer(element: HTMLElement) {
    this.container.append(element);
  }
}
