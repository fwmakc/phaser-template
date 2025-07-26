import { ContainerModel } from './models/container.model';
import { DomModel } from './models/dom.model';
import { SectionTemplate } from './templates/section.template';

export class ScreenSection extends SectionTemplate {
  protected screen: DomModel<HTMLElement>;

  constructor() {
    super();

    this.createContainer();
    this.createScreen();
  }

  protected createContainer(): void {
    this.container = new ContainerModel();
    this.container.addClass('screen-section');
  }

  protected createScreen(): void {
    this.screen = new DomModel();
    this.screen.setCss(`
      height: 50vh;
      inset: 0px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: auto;
    `);
    this.container.append(this.screen);
  }

  getContainer(): HTMLElement {
    return this.container.get();
  }

  setImage(imagePath: string): void {
    const img = new DomModel<HTMLElement>('img');
    img.setAttr('src', imagePath);
    img.setCss(`
      height: 100%;
      object-fit: contain;
      width: 100%;
    `);
    this.screen.append(img);
  }
}
