import { DomModel } from './models/dom.model';
import { SectionTemplate } from './templates/section.template';

export class InputSection extends SectionTemplate {
  protected input: DomModel<HTMLInputElement>;

  constructor() {
    super();

    this.createContainer();
    this.createInput();
  }

  protected createContainer(): void {
    this.container = new DomModel();
    this.container.addClass('input-section');
    this.container.setCss(`
      color: #fff;
      display: flex;
      flex: 0 0 auto;
      font-family: monospace;
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      padding: 10px;
    `);
    this.container.setContent('> ');
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
    this.container.append(this.input);
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

  onKeyPress(callback: (key: string, value: string) => string | null): void {
    this.input.addEvent('keyup', (event: KeyboardEvent) => {
      const value = this.input.get().value;
      const returnedValue = callback(event.key, value);
      if (returnedValue === null) {
        return;
      }
      this.input.get().value = returnedValue || '';
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
