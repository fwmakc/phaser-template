import { StateInterface } from '../interfaces/state.interface';
import { StorageInterface } from '../interfaces/storage.interface';
import { StorageModel } from '../models/storage.model';

export abstract class StateTemplate<T> implements StateInterface {
  protected storage: StorageModel;
  protected state: T;

  constructor(name: string, state: T) {
    this.storage = new StorageModel(name);
    this.state = state;
  }

  abstract save(storage: StorageInterface): boolean;
  abstract load(storage: StorageInterface): boolean;
}
