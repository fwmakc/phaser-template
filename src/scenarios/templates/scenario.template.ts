import { ScenarioInterface } from '../interfaces/scenario.interface';
import { ScenarioSectionsInterface } from '../interfaces/scenarioSections.interface';

import { ConsoleSection } from '../../sections/console.section';
import { InputSection } from '../../sections/input.section';
import { WindowSection } from '../../sections/window.section';

export abstract class ScenarioTemplate implements ScenarioInterface {
  protected console: ConsoleSection;
  protected input: InputSection;
  protected window: WindowSection;

  constructor(sections: ScenarioSectionsInterface) {
    this.console = sections.console;
    this.input = sections.input;
    this.window = sections.window;
  }

  abstract exec(args: any): void;
}
