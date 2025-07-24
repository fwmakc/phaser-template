import { patternsMap } from '../maps/patterns.map';

import { UnknownCommand } from '../unknown.command';
import { convertEngToRus } from './convertEngToRus.helper';

export function setCommandClassByPatterns(userInput: string) {
  const userInputConverted = convertEngToRus(userInput);
  for (const { pattern, command: CurrentCommand } of patternsMap) {
    if (pattern.test(userInput) || pattern.test(userInputConverted)) {
      return CurrentCommand;
    }
  }
  return UnknownCommand;
}
