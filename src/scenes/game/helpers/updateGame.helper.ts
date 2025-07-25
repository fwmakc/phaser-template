import { PlayerState } from '../../../states/player.state';

let lastUpdate = 0;

export function updateGame(scene: any, time: number) {
  const player = new PlayerState();
  // const player: PlayerState = scene.characters.get('player');

  if (time - lastUpdate >= 2000) {
    // player.health.value -= 101;
    // player.health.max = 100;
    // player.health.save();
    console.log(player.health.value, player.health.max);
    lastUpdate = time;
  }
}
