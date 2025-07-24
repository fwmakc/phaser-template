import { ConsoleEntity } from '../../entities/console.entity';
import { InputEntity } from '../../entities/input.entity';
import { WindowEntity } from '../../entities/window.entity';

export interface ScenarioEntitiesInterface {
  console: ConsoleEntity;
  input: InputEntity;
  window: WindowEntity;
}
