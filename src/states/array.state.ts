import { ArrayInterface } from './interfaces/array.interface';
import { StateTemplate } from './templates/state.template';

export class ArrayState extends StateTemplate<ArrayInterface> {
  get max(): number {
    return this.state.maxLength;
  }

  set max(userValue: number) {
    this.state.maxLength = userValue;
  }

  get(): Array<string> {
    return this.state.currentList;
  }

  includes(userValue: string): boolean {
    return this.state.currentList.includes(userValue);
  }

  pop(userValue: string): boolean {
    const { allowList, currentList } = this.state;
    if (!currentList.length || !currentList.includes(userValue)) {
      return false;
    }
    if (allowList.length && !allowList.includes(userValue)) {
      return false;
    }
    this.state.currentList = currentList.filter((item) => item !== userValue);
    return true;
  }

  push(userValue: string): boolean {
    const { allowList, currentList, maxLength } = this.state;
    if (maxLength && currentList.length >= maxLength) {
      return false;
    }
    if (allowList.length && !allowList.includes(userValue)) {
      return false;
    }
    if (currentList.length && currentList.includes(userValue)) {
      return false;
    }
    this.state.currentList.push(userValue);
    return true;
  }

  reset(): void {
    this.state.currentList = [];
  }

  load(): boolean {
    return this.storage.load({
      parameters: ['currentList', 'maxLength'],
      state: this,
    });
  }

  save(): boolean {
    return this.storage.save({
      parameters: ['currentList', 'maxLength'],
      state: this,
    });
  }
}
