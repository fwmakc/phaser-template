import { CommandsScenario } from '../../../scenarios/commands.scenario';
import { InputSection } from '../../../sections/input.section';

export function createInputSection(scene: any) {
  scene.inputSection = new InputSection();

  scene.inputSection.setInactive();

  scene.inputSection.onPressEnter((userInput: string) => {
    const commandsScenario: CommandsScenario = new CommandsScenario({
      console: scene.consoleSection,
      input: scene.inputSection,
      window: scene.windowSection,
    });
    commandsScenario.exec(userInput);
  });

  scene.add.dom(0, 0, scene.inputSection.getContainer()).setOrigin(0, 0);
}
