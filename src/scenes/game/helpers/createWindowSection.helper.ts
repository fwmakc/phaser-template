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

  scene.windowSection.hide();

  scene.domContainer.get().append(scene.windowSection.getContainer());
}
