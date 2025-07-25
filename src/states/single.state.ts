import { SignleInterface } from './interfaces/single.interface';
import { StateTemplate } from './templates/state.template';

export class SingleState extends StateTemplate<SignleInterface> {
  get value(): string {
    return this.state.currentValue;
  }

  set value(userValue: string) {
    const { allowList, currentValue } = this.state;
    if (allowList.length && !allowList.includes(userValue)) {
      return;
    }
    if (currentValue && currentValue === userValue) {
      return;
    }
    this.state.currentValue = userValue;
  }

  reset(): void {
    this.state.currentValue = this.state.defaultValue;
  }

  load(): boolean {
    return this.storage.load({
      parameters: ['currentValue'],
      state: this.state,
    });
  }

  save(): boolean {
    return this.storage.save({
      parameters: ['currentValue'],
      state: this.state,
    });
  }
}
