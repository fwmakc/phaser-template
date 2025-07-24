import { CommandEntitiesInterface } from './interfaces/commandEntities.interface';

export function helloCommand(entities: CommandEntitiesInterface) {
  const { console } = entities;
  console?.print('Здравствуйте! Как я могу помочь вам?');
}
