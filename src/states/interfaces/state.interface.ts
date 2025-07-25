import { StorageInterface } from './storage.interface';

export interface StateInterface {
  save(storage: StorageInterface): boolean;
  load(storage: StorageInterface): boolean;
}
