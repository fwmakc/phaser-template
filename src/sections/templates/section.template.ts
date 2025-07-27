import { SectionInterface } from '../interfaces/section.interface';
import { DomModel } from '../models/dom.model';

export abstract class SectionTemplate implements SectionInterface {
  container: DomModel<HTMLElement>;

  protected abstract createContainer(): void;
  abstract getContainer(): HTMLElement;
}
