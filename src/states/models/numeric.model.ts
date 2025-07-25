import { NumericInterface } from '../interfaces/numeric.interface';
import { StorageModel } from './storage.model';

export class NumericModel extends StorageModel<number> {
  private currentValue: number;
  private defaultValue: number;
  private maxValue: number;
  private minValue: number;

  constructor(stateName: string, numericState: NumericInterface) {
    super(stateName, ['currentValue', 'maxValue']);

    this.currentValue = numericState.current || 0;
    this.defaultValue = numericState.default || 0;
    this.maxValue = numericState.max || 100;
    this.minValue = numericState.min || 0;
  }

  get max(): number {
    return this.maxValue;
  }

  set max(userValue: number) {
    this.maxValue = userValue;
    if (this.currentValue > this.maxValue) {
      this.currentValue = this.maxValue;
    }
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

  reset(): void {
    this.currentValue = this.defaultValue;
  }
}
