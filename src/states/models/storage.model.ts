import { loadStorage } from '../helpers/loadStorage.helper';
import { saveStorage } from '../helpers/saveStorage.helper';
import { StorageInterface } from '../interfaces/storage.interface';

export class StorageModel {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  load(storage: StorageInterface): boolean {
    const { parameters, state } = storage;
    return loadStorage(this.name, parameters, state);
  }

  save(storage: StorageInterface): boolean {
    const { parameters, state } = storage;
    return saveStorage(this.name, parameters, state);
  }
}
