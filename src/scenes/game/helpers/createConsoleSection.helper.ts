import { ConsoleEntity } from '../../../entities/console.entity';

export function createConsoleSection(scene: any) {
  scene.consoleSection = new ConsoleEntity();

  scene.add.dom(0, 0, scene.consoleSection.getContainer()).setOrigin(0, 0);
}
