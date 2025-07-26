import { StackState } from '../../../states/stack.state';

export function createCommandsList(scene: any) {
  const currentList: Array<string> = [];

  scene.commandsList = new StackState<string>('scene-commands-list', {
    currentList,
    currentIndex: 0,
    maxLength: 10,
  });

  const stack = scene.commandsList;
  console.log('+', +stack.push('1'), stack.peek(), stack.value);
  console.log('+', +stack.push('2'), stack.peek(), stack.value);
  console.log('+', +stack.push('3'), stack.peek(), stack.value);
  console.log('+', +stack.push('4'), stack.peek(), stack.value);
  console.log('+', +stack.push('5'), stack.peek(), stack.value);
  console.log('+', +stack.push('6'), stack.peek(), stack.value);

  console.log('.', stack.value.at(-1), stack.peek(0));
  console.log('.', stack.value.at(-2), stack.peek(1));
  console.log('.', stack.value.at(-3), stack.peek(2));
  console.log('.', stack.value.at(-4), stack.peek(3));

  console.log('.', stack.value.at(0), stack.at(0));
  console.log('.', stack.value.at(1), stack.at(1));
  console.log('.', stack.value.at(2), stack.at(2));
  console.log('.', stack.value.at(3), stack.at(3));

  console.log('-', +stack.pop(), stack.peek(), stack.value);
  console.log('-', +stack.pop(), stack.peek(), stack.value);
  console.log('-', +stack.pop(), stack.peek(), stack.value);

  stack.clear();
  console.log('--');

  console.log('+', +stack.unshift('1'), stack.peek(), stack.value);
  console.log('+', +stack.unshift('2'), stack.peek(), stack.value);
  console.log('+', +stack.unshift('3'), stack.peek(), stack.value);
  console.log('+', +stack.unshift('4'), stack.peek(), stack.value);
  console.log('+', +stack.unshift('5'), stack.peek(), stack.value);
  console.log('+', +stack.unshift('6'), stack.peek(), stack.value);

  // stack.index = 1;
  // const item = stack.peekByIndex();
  // const item = stack.popByIndex();
  // const item = stack.atByIndex();
  // const item = stack.shiftByIndex();
  // console.log(item);
  console.log({
    'key pressed': 'not implemented yet',
    userInput: 'not implemented yet',
    index: stack.index,
  });

  console.log(stack.value);
}
