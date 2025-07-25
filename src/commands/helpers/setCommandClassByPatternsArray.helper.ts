import { patternsMap } from '../maps/patterns.map';

import { UnknownCommand } from '../unknown.command';
import { convertEngToRus } from './convertEngToRus.helper';
import { matchPatternInArray } from './matchPatternInArray.helper';
import { splitTextToWords } from './splitTextToWords.helper';

export function setCommandClassByPatternsArray(userInput: string) {
  const userInputConverted = convertEngToRus(userInput);
  const userInputArray = splitTextToWords(`${userInput} ${userInputConverted}`);

  for (const { pattern, command: CurrentCommand } of patternsMap) {
    if (matchPatternInArray(pattern, userInputArray)) {
      return CurrentCommand;
    }
  }
  return UnknownCommand;
}
