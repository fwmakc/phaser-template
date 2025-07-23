import { WindowEntity } from '../entities/window.entity';

export function unknownCommand(window: WindowEntity) {
  window.show(
    'Неизвестная команда'.trim().replace(/\n +/g, '\n').replace(/ +\n/g, '\n'),
    'white',
    '#700',
  );
}
