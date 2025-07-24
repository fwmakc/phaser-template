import { EntityClass } from './classes/entity.class';

export class WindowEntity extends EntityClass {
  private window!: HTMLElement;
  private fakeInput!: HTMLInputElement;
  private active!: boolean;

  private hideCallback!: () => void;
  private showCallback!: () => void;

  constructor() {
    super();

    this.createWindow();
    this.createFakeInput();

    this.hideCallback = () => {};
    this.showCallback = () => {};

    this.hide();
  }

  private createWindow() {
    this.window = this.createDom(
      'div',
      `
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
      `,
    );

    this.addToContainer(this.window);
  }

  private createFakeInput() {
    this.fakeInput = this.createDom(
      'input',
      `
        background: transparent;
        border: none;
        color: transparent;
        height: 0px;
        outline: none;
        width: 0px;
      `,
    );
    this.fakeInput.type = 'text';

    this.fakeInput.addEventListener('keypress', (event: KeyboardEvent) => {
      if (event.key !== 'Enter') {
        return;
      }
      this.hide();
    });

    this.addToContainer(this.fakeInput);
  }

  private setColors(color = '', bgcolor = '') {
    this.window.style.color = color || '#fff';
    this.window.style.backgroundColor = bgcolor || 'transparent';
  }

  isActive() {
    return this.active;
  }

  hide() {
    this.fakeInput.blur();
    this.fakeInput.value = '';
    this.fakeInput.disabled = true;
    this.window.innerHTML = '';
    this.window.style.visibility = 'hidden';
    this.setColors();
    this.hideCallback();
    this.active = false;
  }

  onShow(showCallback: () => void) {
    this.showCallback = showCallback;
  }

  onHide(hideCallback: () => void) {
    this.hideCallback = hideCallback;
  }

  show(content = '', color = '', bgcolor = '') {
    this.active = true;
    this.showCallback();
    this.setColors(color, bgcolor);
    this.window.innerHTML = content;
    this.window.style.visibility = 'visible';
    this.fakeInput.disabled = false;
    this.fakeInput.value = '';
    this.fakeInput.focus();
  }
}
