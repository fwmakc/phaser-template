import { ConsoleEntity } from '../entities/console.entity';

export function helloCommand(console: ConsoleEntity) {
  console.print('Здравствуйте! Как я могу помочь вам?');
}
