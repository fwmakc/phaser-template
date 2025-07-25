import { patterns } from '../datasets/patterns.dataset';

import { UnknownCommand } from '../unknown.command';
import { convertEngToRus } from './convertEngToRus.helper';

export function setCommandClassByPatterns(userInput: string) {
  const userInputConverted = convertEngToRus(userInput);
  for (const { pattern, command: CurrentCommand } of patterns) {
    if (pattern.test(userInput) || pattern.test(userInputConverted)) {
      return CurrentCommand;
    }
  }
  return UnknownCommand;
}
