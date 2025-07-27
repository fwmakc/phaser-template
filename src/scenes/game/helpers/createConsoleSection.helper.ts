import { ConsoleSection } from '../../../sections/console.section';

export function createConsoleSection(scene: any) {
  scene.consoleSection = new ConsoleSection();
  scene.domContainer.get().append(scene.consoleSection.getContainer());
}
