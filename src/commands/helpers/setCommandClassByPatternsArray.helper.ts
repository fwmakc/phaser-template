import { patternsMap } from '../maps/patterns.map';

import { UnknownCommand } from '../unknown.command';
import { convertEngToRus } from './convertEngToRus.helper';

export function setCommandClassByPatternsArray(userInput: string) {
  const userInputConverted = convertEngToRus(userInput);
  const userInputArray = `${userInput} ${userInputConverted}`
    .split(/[.,!?;:‘’“”()[\]{}«»"' _\-—–]+/iu)
    .filter(Boolean);

  for (const { pattern, command: CurrentCommand } of patternsMap) {
    if (userInputArray.some((item) => pattern.test(item))) {
      return CurrentCommand;
    }
  }
  return UnknownCommand;
}
