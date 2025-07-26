import { WindowSection } from '../../../sections/window.section';

export function createWindowSection(scene: any) {
  scene.windowSection = new WindowSection();

  scene.windowSection.onHide(() => {
    scene.inputSection.setActive();
  });

  scene.windowSection.onShow(() => {
    scene.inputSection.setInactive();

    setTimeout(() => {
      if (scene.windowSection.isActive()) {
        scene.windowSection.hide();
      }
    }, 3000);
  });

  scene.add
    .dom(0, 0, scene.windowSection.getContainer())
    .setOrigin(0, 0)
    .setDepth(2);
}
