import { ScreenSection } from '../../../sections/screen.section';

export function createScreenSection(scene: any) {
  scene.screenSection = new ScreenSection();

  scene.domContainer.get().append(scene.screenSection.getContainer());
}
