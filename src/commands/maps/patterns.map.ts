import { CommandClass } from '../classes/command.class';
import { CommandSectionsInterface } from '../interfaces/commandSections.interface';

import { HelloCommand } from '../hello.command';
import { NumberCommand } from '../number.command';

export const patternsMap: Array<{
  pattern: RegExp;
  command: new (sections: CommandSectionsInterface) => CommandClass;
}> = [
  {
    pattern: /^пр(и|е)в(е(т|д).*)?$/iu,
    command: HelloCommand,
  },
  {
    pattern: /^\d+$/,
    command: NumberCommand,
  },
];
