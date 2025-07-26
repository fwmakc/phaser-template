import { ConsoleSection } from '../../sections/console.section';
import { InputSection } from '../../sections/input.section';
import { ScreenSection } from '../../sections/screen.section';
import { WindowSection } from '../../sections/window.section';
import { ScenarioInterface } from '../interfaces/scenario.interface';
import { ScenarioSectionsInterface } from '../interfaces/scenarioSections.interface';

export abstract class ScenarioTemplate implements ScenarioInterface {
  protected console: ConsoleSection;
  protected input: InputSection;
  protected screen: ScreenSection;
  protected window: WindowSection;

  constructor(sections: ScenarioSectionsInterface) {
    this.console = sections.console;
    this.input = sections.input;
    this.screen = sections.screen;
    this.window = sections.window;
  }

  abstract exec(args: any): void;
}
