import { ScreenSection } from '../../../sections/screen.section';

export function createScreenSection(scene: any) {
  scene.screenSection = new ScreenSection();

  scene.add
    .dom(0, 0, scene.screenSection.getContainer())
    .setOrigin(0, 0)
    .setDepth(0);
}
