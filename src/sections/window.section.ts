import { DomModel } from './models/dom.model';
import { SectionTemplate } from './templates/section.template';

export class WindowSection extends SectionTemplate {
  protected active: boolean;
  protected fakeInput: DomModel<HTMLInputElement>;
  protected window: DomModel<HTMLElement>;
  protected wrapper: DomModel<HTMLElement>;

  private hideCallback: () => void;
  private showCallback: () => void;

  constructor() {
    super();

    this.createContainer();
    this.createWrapper();
    this.createWindow();
    this.createFakeInput();

    this.hideCallback = () => {};
    this.showCallback = () => {};

    this.hide();
  }

  protected createContainer(): void {
    this.container = new DomModel();
    this.container.addClass('window-section');
    this.container.setCss(`
      inset: 0px;
      position: absolute;
    `);
  }

  protected createWindow(): void {
    this.window = new DomModel();
    this.window.setCss(`
      font-family: monospace;
      font-size: 14px;
      height: auto;
      overflow: auto;
      overflow-wrap: break-word;
      padding: 10px;
      text-align: center;
      white-space: pre-wrap;
      width: auto;
    `);
    this.wrapper.append(this.window);
  }

  protected createWrapper(): void {
    this.wrapper = new DomModel();
    this.wrapper.setCss(`
      background-color: black;
      height: auto;
      left: 50%;
      padding: 10px;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      visibility: visible;
      width: auto;
    `);
    this.container.append(this.wrapper);
  }

  private createFakeInput(): void {
    this.fakeInput = new DomModel('input');
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
    this.wrapper.setStyle('visibility', 'hidden');
    this.container.setStyle('display', 'none');

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
    this.wrapper.setStyle('visibility', 'visible');
    this.container.setStyle('display', 'block');

    const fakeInput = this.fakeInput.get();
    fakeInput.disabled = false;
    fakeInput.value = '';
    fakeInput.focus();
  }
}
