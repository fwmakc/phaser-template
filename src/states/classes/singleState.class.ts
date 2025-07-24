import { SignleStateInterface } from '../interfaces/singleState.interface';
import { StateClass } from './state.class';

export class SingleStateClass extends StateClass<string> {
  private allowList: Array<string>;
  private currentValue: string;
  private defaultValue: string;

  constructor(stateName: string, singleState: SignleStateInterface) {
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
