import { MapInterface } from './interfaces/map.interface';
import { StateTemplate } from './templates/state.template';

export class MapState<T> extends StateTemplate<MapInterface<T>> {
  find(name: string) {
    return this.state.currentMap.get(name);
  }

  forEach(callback: (value: T, key: string) => void): void {
    this.state.currentMap.forEach(callback);
  }

  get() {
    return this.state.currentMap;
  }

  includes(name: string): boolean {
    return this.state.currentMap.has(name);
  }

  insert(name: string, value: T): boolean {
    const { allowKeys } = this.state;
    if (allowKeys.length && !allowKeys.includes(name)) {
      return false;
    }
    this.state.currentMap.set(name, value);
    return true;
  }

  remove(name: string): boolean {
    const { allowKeys } = this.state;
    if (allowKeys.length && !allowKeys.includes(name)) {
      return false;
    }
    if (!this.state.currentMap.has(name)) {
      return false;
    }
    this.state.currentMap.delete(name);
    return true;
  }

  reset(): void {
    this.state.currentMap.clear();
  }

  load(): boolean {
    return this.storage.load({
      parameters: ['currentMap'],
      state: this.state,
    });
  }

  save(): boolean {
    return this.storage.save({
      parameters: ['currentMap'],
      state: this.state,
    });
  }
}
