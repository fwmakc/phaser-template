import { ConsoleSection } from '../../sections/console.section';
import { InputSection } from '../../sections/input.section';
import { WindowSection } from '../../sections/window.section';

export interface ScenarioSectionsInterface {
  console: ConsoleSection;
  input: InputSection;
  window: WindowSection;
}
