import { DomModel } from './dom.model';

export class ContainerModel {
  protected container: DomModel<HTMLElement>;

  constructor() {
    this.container = new DomModel('section');
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

  append(dom: DomModel<HTMLElement>) {
    this.container.append(dom);
  }

  get(): HTMLElement {
    return this.container.get();
  }
}
