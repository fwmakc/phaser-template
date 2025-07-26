import { ContainerModel } from './models/container.model';
import { DomModel } from './models/dom.model';
import { SectionTemplate } from './templates/section.template';

export class ScreenSection extends SectionTemplate {
  protected active: boolean;
  protected screen: DomModel<HTMLElement>;

  private hideCallback: () => void;
  private showCallback: () => void;

  constructor() {
    super();

    this.createContainer();
    this.createScreen();

    this.hideCallback = () => {};
    this.showCallback = () => {};
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

  hide(): void {
    this.screen.setContent('');
    this.screen.setStyle('visibility', 'hidden');
    this.hideCallback();
    this.active = false;
  }

  isActive(): boolean {
    return this.active;
  }

  onHide(hideCallback: () => void): void {
    this.hideCallback = hideCallback;
  }

  onShow(showCallback: () => void): void {
    this.showCallback = showCallback;
  }

  show(): void {
    this.active = true;
    this.showCallback();
    this.screen.setStyle('visibility', 'visible');
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
    this.show();
  }
}
