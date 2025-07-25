import { ContainerModel } from './models/container.model';
import { DomModel } from './models/dom.model';
import { SectionTemplate } from './templates/section.template';

export class ConsoleSection extends SectionTemplate {
  protected container = new ContainerModel();
  protected console: DomModel<HTMLElement>;
  protected textColor: string;

  constructor() {
    super();
    this.createConsole();
  }

  protected createConsole(): void {
    this.console = new DomModel();
    this.console.setCss(`
      background-color: transparent;
      color: #fff;
      font-family: monospace;
      font-size: 14px;
      line-height: 18px;
      max-height: calc(100% - 60px);
      overflow: auto;
      padding: 10px;
    `);
    this.container.append(this.console);
  }

  append(text = ''): ConsoleSection {
    const span = new DomModel('span');
    if (this.textColor) {
      span.setStyle('color', this.textColor);
    }
    span.setContent(text);
    this.console.append(span);
    return this;
  }

  br(): ConsoleSection {
    const br = new DomModel('br');
    this.console.append(br);
    this.console.get().scrollTop = this.console.get().scrollHeight;
    return this;
  }

  clear(): ConsoleSection {
    this.console.setContent('');
    return this;
  }

  color(color = ''): ConsoleSection {
    this.textColor = color;
    return this;
  }

  countLength(): number {
    return this.console.get().innerText.length;
  }

  countLines(): number {
    const height = this.console.get().offsetHeight;
    const lineHeight = parseFloat(
      getComputedStyle(this.console.get()).lineHeight,
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
