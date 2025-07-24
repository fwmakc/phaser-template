import { commandsMap } from '../maps/commands.map';

import { UnknownCommand } from '../unknown.command';
import { NumberCommand } from '../number.command';
import { convertEngToRus } from './convertEngToRus.helper';

export function setCommandClass(userInput: string) {
  if (!isNaN(Number(userInput))) {
    return NumberCommand;
  }

  const userInputConverted = convertEngToRus(userInput);

  return (
    commandsMap.get(userInput) ||
    commandsMap.get(userInputConverted) ||
    UnknownCommand
  );
}
