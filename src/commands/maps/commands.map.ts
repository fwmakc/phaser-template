import { CommandClass } from '../classes/command.class';
import { CommandSectionsInterface } from '../interfaces/commandSections.interface';

import { HelloCommand } from '../hello.command';

export const commandsMap: Map<
  string,
  new (sections: CommandSectionsInterface) => CommandClass
> = new Map([
  ['привет', HelloCommand],
  ['здравствуй', HelloCommand],
]);
