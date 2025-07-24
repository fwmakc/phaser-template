import { CommandClass } from '../classes/command.class';
import { CommandEntitiesInterface } from '../interfaces/commandEntities.interface';

import { HelloCommand } from '../hello.command';

export const commandsMap: Map<
  string,
  new (entities: CommandEntitiesInterface) => CommandClass
> = new Map([
  ['привет', HelloCommand],
  ['здравствуй', HelloCommand],
]);
