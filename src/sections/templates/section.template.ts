import { ContainerModel } from '../models/container.model';
import { SectionInterface } from '../interfaces/section.interface';

export abstract class SectionTemplate implements SectionInterface {
  protected container: ContainerModel;

  protected abstract createContainer(): void;
  abstract getContainer(): HTMLElement;
}
