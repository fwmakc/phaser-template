import { ScreenSection } from '../../../sections/screen.section';

export function createScreenSection(scene: any) {
  scene.screenSection = new ScreenSection();

  scene.screenSection.onHide(() => {
    scene.consoleSection.minimized(false);
  });

  scene.screenSection.onShow(() => {
    scene.consoleSection.minimized(true);
  });

  scene.add
    .dom(0, 0, scene.screenSection.getContainer())
    .setOrigin(0, 0)
    .setDepth(0);
}
