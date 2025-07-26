import { ContainerModel } from './models/container.model';
import { DomModel } from './models/dom.model';
import { SectionTemplate } from './templates/section.template';

export class InputSection extends SectionTemplate {
  protected input: DomModel<HTMLInputElement>;
  protected wrapper: DomModel<HTMLElement>;

  constructor() {
    super();

    this.createContainer();
    this.createInput();
    this.createWrapper();
  }

  protected createContainer(): void {
    this.container = new ContainerModel();
    this.container.addClass('input-section');
  }

  protected createInput(): void {
    this.input = new DomModel('input');
    this.input.setCss(`
      background-color: transparent;
      border: none;
      color: #fff;
      font-family: monospace;
      font-size: 14px;
      outline: none;
      padding: 0 0 0 10px;
      width: 100%;
    `);
    const input = this.input.get();
    input.type = 'text';
  }

  protected createWrapper(): void {
    this.wrapper = new DomModel();
    this.wrapper.setCss(`
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
    `);
    this.wrapper.setContent('> ');
    this.wrapper.append(this.input);
    this.container.append(this.wrapper);
  }

  clearValue(): void {
    const input = this.input.get();
    input.value = '';
  }

  focus(): void {
    const input = this.input.get();
    if (input.disabled) {
      return;
    }
    input.focus();
  }

  getContainer(): HTMLElement {
    return this.container.get();
  }

  getValue(): string {
    const input = this.input.get();
    return input.value;
  }

  onPressEnter(callback: (value: string) => void): void {
    this.input.addEvent('keypress', (event: KeyboardEvent) => {
      if (event.key !== 'Enter') {
        return;
      }
      const value = this.getValue();
      this.clearValue();
      callback(value);
    });
  }

  setActive(): void {
    const input = this.input.get();
    input.disabled = false;
    input.style.visibility = 'visible';
    input.focus();
  }

  setInactive(): void {
    const input = this.input.get();
    input.disabled = true;
    input.style.visibility = 'hidden';
    input.blur();
  }
}
