import { patterns } from '../datasets/patterns.dataset';

import { UnknownCommand } from '../unknown.command';
import { convertEngToRus } from './convertEngToRus.helper';
import { matchPatternInArray } from './matchPatternInArray.helper';
import { splitTextToWords } from './splitTextToWords.helper';

export function setCommandClassByPatternsArray(userInput: string) {
  const userInputConverted = convertEngToRus(userInput);
  const userInputArray = splitTextToWords(`${userInput} ${userInputConverted}`);

  for (const { pattern, command: CurrentCommand } of patterns) {
    if (matchPatternInArray(pattern, userInputArray)) {
      return CurrentCommand;
    }
  }
  return UnknownCommand;
}
