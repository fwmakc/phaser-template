import { CommandInterface } from '../interfaces/command.interface';
import { CommandSectionsInterface } from '../interfaces/commandSections.interface';

import { HelloCommand } from '../hello.command';

export const commands: Map<
  string,
  new (sections: CommandSectionsInterface) => CommandInterface
> = new Map([
  ['привет', HelloCommand],
  ['здравствуй', HelloCommand],
]);
