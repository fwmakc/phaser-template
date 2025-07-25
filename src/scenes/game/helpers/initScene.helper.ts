import { PlayerCharacter } from '../../../characters/player.character';

export function initScene(scene: any) {
  scene.things = new Map();
  scene.characters = new Map();

  const player = new PlayerCharacter();
  scene.characters.set('player', player);
}
