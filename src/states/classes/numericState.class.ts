import { NumericStateInterface } from '../interfaces/numericState.interface';
import { StateClass } from './state.class';

export class NumericStateClass extends StateClass<number> {
  private currentValue: number;
  private defaultValue: number;
  private maxValue: number;
  private minValue: number;

  constructor(stateName: string, numericState: NumericStateInterface) {
    super(stateName, ['currentValue', 'maxValue']);

    this.currentValue = numericState.current || 0;
    this.defaultValue = numericState.default || 0;
    this.maxValue = numericState.max || 100;
    this.minValue = numericState.min || 0;
  }

  get value(): number {
    return this.currentValue;
  }

  set value(userValue: number) {
    if (userValue < this.minValue) {
      userValue = this.minValue;
    }
    if (userValue > this.maxValue) {
      userValue = this.maxValue;
    }
    this.currentValue = userValue;
  }

  get max(): number {
    return this.maxValue;
  }

  set max(userValue: number) {
    this.maxValue = userValue;
  }

  reset(): void {
    this.currentValue = this.defaultValue;
  }
}
