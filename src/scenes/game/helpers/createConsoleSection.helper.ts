import { ConsoleSection } from '../../../sections/console.section';

export function createConsoleSection(scene: any) {
  scene.consoleSection = new ConsoleSection();

  scene.add.dom(0, 0, scene.consoleSection.getContainer()).setOrigin(0, 0);
}
