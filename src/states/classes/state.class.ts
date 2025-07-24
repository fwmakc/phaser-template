import { loadState } from '../helpers/loadState.helper';
import { saveState } from '../helpers/saveState.helper';

export abstract class StateClass<T> {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract get value(): T;

  abstract set value(userValue: T);

  load(): boolean {
    return loadState(this.name, this);
  }

  save(): boolean {
    return saveState(this.name, this);
  }
}
