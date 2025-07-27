import { DomModel } from '../../../sections/models/dom.model';

export function createDomContainer(scene: any) {
  scene.domContainer = new DomModel();
  scene.domContainer.setId('dom-container');
  scene.domContainer.setCss(`
    background-color: transparent;
    inset: 0;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    display: flex;
    flex-direction: column;
  `);

  const gameContainer = document.getElementById('game-container');
  gameContainer?.append(scene.domContainer.get());
}
