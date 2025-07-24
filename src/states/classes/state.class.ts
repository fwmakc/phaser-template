import { loadState } from '../helpers/loadState.helper';
import { saveState } from '../helpers/saveState.helper';

export abstract class StateClass<T> {
  protected name: string;
  protected storageParameters: Array<string>;

  constructor(name: string, storageParameters: Array<string>) {
    this.name = name;
    this.storageParameters = storageParameters;
  }

  load(): boolean {
    return loadState(this.name, this.storageParameters, this);
  }

  save(): boolean {
    return saveState(this.name, this.storageParameters, this);
  }
}
