import { ContainerClass } from '../classes/container.class';

export abstract class SectionInterface {
  protected abstract container: ContainerClass;

  protected abstract createContainer(): void;
  abstract getContainer(): HTMLElement;
}
