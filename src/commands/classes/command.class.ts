import { ConsoleEntity } from '../../entities/console.entity';
import { InputEntity } from '../../entities/input.entity';
import { WindowEntity } from '../../entities/window.entity';
import { CommandEntitiesInterface } from '../interfaces/commandEntities.interface';

export abstract class CommandClass {
  protected console: ConsoleEntity;
  protected input: InputEntity;
  protected window: WindowEntity;

  constructor(entities: CommandEntitiesInterface) {
    this.console = entities.console;
    this.input = entities.input;
    this.window = entities.window;
  }

  abstract exec(args: any): void;
}
