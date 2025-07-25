import { NumericInterface } from './interfaces/numeric.interface';
import { StateTemplate } from './templates/state.template';

export class NumericState extends StateTemplate<NumericInterface> {
  get max(): number {
    return this.state.maxValue;
  }

  set max(userValue: number) {
    this.state.maxValue = userValue;
    const { currentValue, maxValue } = this.state;
    if (currentValue > maxValue) {
      this.state.currentValue = maxValue;
    }
  }

  get value(): number {
    return this.state.currentValue;
  }

  set value(userValue: number) {
    const { minValue, maxValue } = this.state;
    if (userValue < minValue) {
      userValue = minValue;
    }
    if (userValue > maxValue) {
      userValue = maxValue;
    }
    this.state.currentValue = userValue;
  }

  reset(): void {
    this.state.currentValue = this.state.defaultValue;
  }

  load(): boolean {
    return this.storage.load({
      parameters: ['currentValue', 'maxValue'],
      state: this,
    });
  }

  save(): boolean {
    return this.storage.save({
      parameters: ['currentValue', 'maxValue'],
      state: this,
    });
  }
}
