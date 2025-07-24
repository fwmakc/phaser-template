import { ArrayStateInterface } from '../interfaces/arrayState.interface';
import { StateClass } from './state.class';

export class ArrayStateClass extends StateClass<string[]> {
  private currentList: Array<string>;
  private allowList: Array<string>;
  private maxLength: number;

  constructor(stateName: string, arrayState: ArrayStateInterface) {
    super(stateName, ['currentList', 'maxLength']);

    this.currentList = arrayState.current || [];
    this.allowList = arrayState.allow || [];
    this.maxLength = arrayState.max || 1;
  }

  get max(): number {
    return this.maxLength;
  }

  set max(userValue: number) {
    this.maxLength = userValue;
  }

  get(): Array<string> {
    return this.currentList;
  }

  includes(userValue: string): boolean {
    return this.currentList.includes(userValue);
  }

  pop(userValue: string): boolean {
    if (!this.currentList.length) {
      return false;
    }

    if (this.allowList.length && !this.allowList.includes(userValue)) {
      return false;
    }

    if (this.currentList.length && !this.currentList.includes(userValue)) {
      return false;
    }

    this.currentList = this.currentList.filter((item) => item !== userValue);

    return true;
  }

  push(userValue: string): boolean {
    if (this.maxLength && this.currentList.length >= this.maxLength) {
      return false;
    }

    if (this.allowList.length && !this.allowList.includes(userValue)) {
      return false;
    }

    if (this.currentList.length && this.currentList.includes(userValue)) {
      return false;
    }

    this.currentList.push(userValue);

    return true;
  }

  reset(): void {
    this.currentList = [];
  }
}
