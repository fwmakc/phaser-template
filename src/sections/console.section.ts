import { DomModel } from './models/dom.model';
import { SectionTemplate } from './templates/section.template';

export class ConsoleSection extends SectionTemplate {
  protected textColor: string;

  constructor() {
    super();

    this.createContainer();
  }

  protected createContainer(): void {
    this.container = new DomModel();
    this.container.addClass('console-section');
    this.container.setCss(`
      color: #fff;
      flex: 0 1 auto;
      font-family: monospace;
      font-size: 14px;
      height: 100%;
      line-height: 18px;
      margin-top: 10px;
      overflow: auto;
      padding: 0 10px;
    `);
  }

  append(text = ''): ConsoleSection {
    const span = new DomModel('span');
    if (this.textColor) {
      span.setStyle('color', this.textColor);
    }
    span.setContent(text);
    this.container.append(span);
    return this;
  }

  br(): ConsoleSection {
    const br = new DomModel('br');
    this.container.append(br);
    this.container.get().scrollTop = this.container.get().scrollHeight;
    return this;
  }

  clear(): ConsoleSection {
    this.container.setContent('');
    return this;
  }

  color(color = ''): ConsoleSection {
    this.textColor = color;
    return this;
  }

  countLength(): number {
    return this.container.get().innerText.length;
  }

  countLines(): number {
    const height = this.container.get().offsetHeight;
    const lineHeight = parseFloat(
      getComputedStyle(this.container.get()).lineHeight,
    );
    const numberOfLines = Math.floor(height / lineHeight);
    return numberOfLines;
  }

  end(): void {
    this.color();
    this.br();
  }

  getContainer(): HTMLElement {
    return this.container.get();
  }

  print(text = '', color = ''): void {
    this.color(color);
    this.append(text);
    this.end();
  }
}
