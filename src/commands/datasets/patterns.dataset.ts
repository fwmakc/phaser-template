import { CommandInterface } from '../interfaces/command.interface';
import { CommandSectionsInterface } from '../interfaces/commandSections.interface';

import { HelloCommand } from '../hello.command';
import { NumberCommand } from '../number.command';

export const patterns: Array<{
  pattern: RegExp;
  command: new (sections: CommandSectionsInterface) => CommandInterface;
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
