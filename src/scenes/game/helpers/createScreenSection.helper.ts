import { ScreenSection } from '../../../sections/screen.section';

export function createScreenSection(scene: any) {
  scene.screenSection = new ScreenSection();

  scene.screenSection.onHide(() => {
    scene.consoleSection.setStyle('marginTop', '0');
  });

  scene.screenSection.onShow(() => {
    scene.consoleSection.setStyle('marginTop', '50vh');
  });

  scene.add
    .dom(0, 0, scene.screenSection.getContainer())
    .setOrigin(0, 0)
    .setDepth(0);
}
