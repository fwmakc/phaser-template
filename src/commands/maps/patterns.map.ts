import { CommandClass } from '../classes/command.class';
import { CommandEntitiesInterface } from '../interfaces/commandEntities.interface';

import { HelloCommand } from '../hello.command';
import { NumberCommand } from '../number.command';

export const patternsMap: Array<{
  pattern: RegExp;
  command: new (entities: CommandEntitiesInterface) => CommandClass;
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
