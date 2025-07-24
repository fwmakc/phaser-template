import { CommandEntitiesInterface } from './interfaces/commandEntities.interface';

export function unknownCommand(entities: CommandEntitiesInterface) {
  const { window } = entities;
  window?.show(
    'Неизвестная команда'.trim().replace(/\n +/g, '\n').replace(/ +\n/g, '\n'),
    'white',
    '#700',
  );
}
