import { ConsoleEntity } from '../../entities/console.entity';
import { InputEntity } from '../../entities/input.entity';
import { WindowEntity } from '../../entities/window.entity';
import { ScenarioEntitiesInterface } from '../interfaces/scenarioEntities.interface';

export abstract class ScenarioClass {
  protected console!: ConsoleEntity;
  protected input!: InputEntity;
  protected window!: WindowEntity;

  constructor(entities: ScenarioEntitiesInterface) {
    this.console = entities.console;
    this.input = entities.input;
    this.window = entities.window;
  }

  abstract exec(args: any): void;
}
