import { commands } from '../datasets/commands.dataset';

import { UnknownCommand } from '../unknown.command';
import { NumberCommand } from '../number.command';
import { convertEngToRus } from './convertEngToRus.helper';

export function setCommandClass(userInput: string) {
  if (!isNaN(Number(userInput))) {
    return NumberCommand;
  }

  const userInputConverted = convertEngToRus(userInput);

  return (
    commands.get(userInput) ||
    commands.get(userInputConverted) ||
    UnknownCommand
  );
}
