import { ConsoleEntity } from '../entities/console.entity';
import { InputEntity } from '../entities/input.entity';
import { WindowEntity } from '../entities/window.entity';

export class ScenarioClass {
  protected console!: ConsoleEntity;
  protected input!: InputEntity;
  protected window!: WindowEntity;

  constructor(
    console: ConsoleEntity,
    input: InputEntity,
    window: WindowEntity,
  ) {
    this.console = console;
    this.input = input;
    this.window = window;
  }
}
