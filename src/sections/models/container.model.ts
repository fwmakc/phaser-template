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

  addClass(className: string) {
    this.container.addClass(className);
  }

  append(dom: DomModel<HTMLElement>) {
    this.container.append(dom);
  }

  get(): HTMLElement {
    return this.container.get();
  }

  hide(): void {
    this.container.setStyle('visibility', 'hidden');
  }

  show(): void {
    this.container.setStyle('visibility', 'visible');
  }
}
