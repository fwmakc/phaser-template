import { ContainerClass } from './classes/container.class';
import { DomClass } from './classes/dom.class';
import { SectionInterface } from './interfaces/section.interface';

export class WindowSection extends SectionInterface {
  protected container: ContainerClass;
  protected window: DomClass<HTMLElement>;
  protected fakeInput: DomClass<HTMLInputElement>;
  protected active: boolean;

  private hideCallback: () => void;
  private showCallback: () => void;

  constructor() {
    super();

    this.createContainer();
    this.createWindow();
    this.createFakeInput();

    this.hideCallback = () => {};
    this.showCallback = () => {};

    this.hide();
  }

  protected createContainer(): void {
    this.container = new ContainerClass();
  }

  protected createWindow(): void {
    this.window = new DomClass();
    this.window.setCss(`
      font-family: monospace;
      font-size: 14px;
      height: auto;
      overflow: auto;
      padding: 10px;
      width: auto;

      white-space: pre-wrap;
      overflow-wrap: break-word;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `);
    this.container.append(this.window);
  }

  private createFakeInput(): void {
    this.fakeInput = new DomClass('input');
    this.fakeInput.setCss(`
      background: transparent;
      border: none;
      color: transparent;
      height: 0px;
      outline: none;
      width: 0px;
    `);
    const fakeInput = this.fakeInput.get();
    fakeInput.type = 'text';
    this.fakeInput.addEvent('keypress', (event: KeyboardEvent) => {
      if (event.key !== 'Enter') {
        return;
      }
      this.hide();
    });
    this.container.append(this.fakeInput);
  }

  private setColors(color = '', bgcolor = ''): void {
    this.window.setStyle('color', color || '#fff');
    this.window.setStyle('backgroundColor', bgcolor || 'transparent');
  }

  getContainer(): HTMLElement {
    return this.container.get();
  }

  hide(): void {
    const fakeInput = this.fakeInput.get();
    fakeInput.blur();
    fakeInput.value = '';
    fakeInput.disabled = true;

    this.window.setContent('');
    this.window.setStyle('visibility', 'hidden');

    this.setColors();
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

  show(content = '', color = '', bgcolor = ''): void {
    this.active = true;

    this.showCallback();
    this.setColors(color, bgcolor);

    this.window.setContent(content);
    this.window.setStyle('visibility', 'visible');

    const fakeInput = this.fakeInput.get();
    fakeInput.disabled = false;
    fakeInput.value = '';
    fakeInput.focus();
  }
}
