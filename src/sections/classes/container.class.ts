import { DomClass } from './dom.class';

export class ContainerClass {
  protected container: DomClass<HTMLElement>;

  constructor() {
    this.container = new DomClass('section');
    this.container.setCss(`
      background-color: transparent;
      height: 100%;
      overflow: hidden;
      padding: 0px;
      width: 100%;
      top: 0;
      left: 0;
    `);
  }

  append(domClass: DomClass<HTMLElement>) {
    this.container.append(domClass);
  }

  get(): HTMLElement {
    return this.container.get();
  }
}
