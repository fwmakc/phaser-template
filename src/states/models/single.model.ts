import { SignleInterface } from '../interfaces/single.interface';
import { StorageModel } from './storage.model';

export class SingleModel extends StorageModel<string> {
  private allowList: Array<string>;
  private currentValue: string;
  private defaultValue: string;

  constructor(stateName: string, singleState: SignleInterface) {
    super(stateName, ['currentValue']);

    this.allowList = singleState.allow || [];
    this.currentValue = singleState.current || '';
    this.defaultValue = singleState.default || '';
  }

  get value(): string {
    return this.currentValue;
  }

  set value(userValue: string) {
    if (this.allowList.length && !this.allowList.includes(userValue)) {
      return;
    }

    if (this.currentValue && this.currentValue === userValue) {
      return;
    }

    this.currentValue = userValue;
  }

  reset(): void {
    this.currentValue = this.defaultValue;
  }
}
