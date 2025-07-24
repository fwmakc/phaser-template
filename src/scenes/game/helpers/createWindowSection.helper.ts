import { WindowEntity } from '../../../entities/window.entity';

export function createWindowSection(scene: any) {
  scene.windowSection = new WindowEntity();

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

  scene.add.dom(0, 0, scene.windowSection.getContainer()).setOrigin(0, 0);
}
