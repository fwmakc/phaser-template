import { loadStorage } from '../helpers/loadStorage.helper';
import { saveStorage } from '../helpers/saveStorage.helper';

export abstract class StorageModel<T> {
  protected name: string;
  protected storageParameters: Array<string>;

  constructor(name: string, storageParameters: Array<string>) {
    this.name = name;
    this.storageParameters = storageParameters;
  }

  load(): boolean {
    return loadStorage(this.name, this.storageParameters, this);
  }

  save(): boolean {
    return saveStorage(this.name, this.storageParameters, this);
  }
}
