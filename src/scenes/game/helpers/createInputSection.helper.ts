import { CommandsScenario } from '../../../scenarios/commands.scenario';
import { InputSection } from '../../../sections/input.section';

export function createInputSection(scene: any) {
  scene.inputSection = new InputSection();

  scene.inputSection.setInactive();

  scene.inputSection.onKeyPress((key: string, userInput: string) => {
    const commands = scene.commandsList;

    if (key === 'Enter') {
      commands.value = commands.value.filter(
        (command: string) => command !== userInput,
      );
      commands.push(userInput);
      commands.index = 0;
      const commandsScenario: CommandsScenario = new CommandsScenario({
        console: scene.consoleSection,
        input: scene.inputSection,
        screen: scene.screenSection,
        window: scene.windowSection,
      });
      commandsScenario.exec(userInput);
      return '';
    }

    if (key === 'ArrowUp') {
      commands.index -= 1;
      return commands.at(commands.index);
    }
    if (key === 'ArrowDown') {
      commands.index += 1;
      if (commands.index > 0) {
        commands.index = 0;
      }
      if (commands.index === 0) {
        return '';
      }
      return commands.at(commands.index);
    }

    return null;
  });

  scene.add
    .dom(0, 0, scene.inputSection.getContainer())
    .setOrigin(0, 0)
    .setDepth(0);
}
