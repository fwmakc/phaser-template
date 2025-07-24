import { EntityClass } from './classes/entity.class';

export class ConsoleEntity extends EntityClass {
  private console!: HTMLElement;
  private textColor!: string;

  constructor() {
    super();

    this.createConsole();
  }

  private createConsole() {
    this.console = this.createDom(
      'div',
      `
        background-color: transparent;
        color: #fff;
        font-family: monospace;
        font-size: 14px;
        line-height: 18px;
        max-height: calc(100% - 60px);
        overflow: auto;
        padding: 10px;
      `,
    );
    this.addToContainer(this.console);
  }

  append(text = '') {
    const span = this.createDom(
      'span',
      this.textColor ? `color: ${this.textColor}` : '',
    );
    span.innerHTML = text;

    this.console.append(span);

    return this;
  }

  br() {
    this.console.append(this.createDom('br'));

    this.console.scrollTop = this.console.scrollHeight;

    return this;
  }

  clear() {
    this.console.innerHTML = '';
  }

  color(color = '') {
    this.textColor = color;

    return this;
  }

  countLines() {
    const height = this.console.offsetHeight;
    const lineHeight = parseFloat(getComputedStyle(this.console).lineHeight);
    const numberOfLines = Math.floor(height / lineHeight);

    return numberOfLines;
  }

  end() {
    this.color();
    this.br();
  }

  getStatus() {
    return {
      length: this.console.innerText.length,
      console: this.console,
      lines: this.countLines(),
      // height: this.console.
    };
  }

  print(text = '', color = '') {
    this.color(color);
    this.append(text);
    this.end();
  }
}
