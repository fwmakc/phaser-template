import { EntityClass } from '../classes/entity.class';

export class InputEntity extends EntityClass {
  private input!: HTMLInputElement;
  private wrapper!: HTMLElement;

  constructor() {
    super();

    this.createInput();
    this.createWrapper();
  }

  private createInput() {
    this.input = this.createDom(
      'input',
      `
        background-color: transparent;
        border: none;
        color: #fff;
        font-family: monospace;
        font-size: 14px;
        outline: none;
        padding: 0 0 0 10px;
        width: 100%;
      `,
    );
    this.input.type = 'text';
  }

  private createWrapper() {
    this.wrapper = this.createDom(
      'div',
      `
        background-color: transparent;
        color: #fff;
        display: flex;
        font-family: monospace;
        font-size: 14px;
        inset: auto 0px 0px;
        line-height: 20px;
        overflow: hidden;
        padding: 10px;
        position: absolute;
      `,
    );
    this.wrapper.innerHTML = '> ';
    this.wrapper.append(this.input);
    this.addToContainer(this.wrapper);
  }

  clearValue() {
    this.input.value = '';
  }

  focus() {
    if (this.input.disabled) {
      return;
    }
    this.input.focus();
  }

  getValue() {
    return this.input.value;
  }

  onPressEnter(callback: (value: string) => void) {
    this.input.addEventListener('keypress', (event: KeyboardEvent) => {
      if (event.key !== 'Enter') {
        return;
      }
      const value = this.getValue();
      this.clearValue();
      callback(value);
    });
  }

  setActive() {
    this.input.disabled = false;
    this.input.style.visibility = 'visible';
    this.input.focus();
  }

  setInactive() {
    this.input.disabled = true;
    this.input.style.visibility = 'hidden';
    this.input.blur();
  }
}
