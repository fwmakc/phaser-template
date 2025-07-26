import { StackInterface } from './interfaces/stack.interface';
import { StateTemplate } from './templates/state.template';

export class StackState<T> extends StateTemplate<StackInterface<T>> {
  get index(): number {
    return this.state.currentIndex;
  }

  set index(userInput: number) {
    if (userInput < -this.state.currentList.length) {
      userInput = -this.state.currentList.length;
    }
    if (userInput >= this.state.currentList.length - 1) {
      userInput = this.state.currentList.length - 1;
    }
    this.state.currentIndex = userInput;
  }

  get value(): Array<T> {
    return this.state.currentList;
  }

  set value(userInput: Array<T>) {
    this.state.currentList = userInput;
  }

  // возвращает первый элемент со дна стека и далее вверх с увеличением индекса
  at(index = 0): T | null {
    return this.state.currentList.at(index) || null;
  }

  length(): number {
    return this.state.currentList.length;
  }

  // возвращает последний добавленный элемент стека и далее вниз с увеличением индекса
  peek(index = 0): T | null {
    index = index * -1 - 1;
    return this.at(index);
  }

  // добавляет элемент в стек
  push(userValue: T): T | null {
    let firstValue: T | null = null;
    const { currentList, maxLength } = this.state;
    if (maxLength && currentList.length >= maxLength) {
      firstValue = this.state.currentList.shift() || null;
    }
    this.state.currentList.push(userValue);
    return firstValue;
  }

  // возвращает последний добавленный элемент и удаляет его из стека
  pop(): T | null {
    return this.state.currentList.pop() || null;
  }

  // возвращает первый элемент со дна стека и удаляет его
  shift(): T | null {
    return this.state.currentList.shift() || null;
  }

  // добавляет элемент на дно стека
  unshift(userValue: T): T | null {
    let lastValue: T | null = null;
    const { currentList, maxLength } = this.state;
    if (maxLength && currentList.length >= maxLength) {
      lastValue = this.state.currentList.pop() || null;
    }
    this.state.currentList.unshift(userValue);
    return lastValue;
  }

  clear(): void {
    this.state.currentList = [];
  }

  load(): boolean {
    return this.storage.load({
      parameters: ['currentList'],
      state: this.state,
    });
  }

  save(): boolean {
    return this.storage.save({
      parameters: ['currentList'],
      state: this.state,
    });
  }
}
