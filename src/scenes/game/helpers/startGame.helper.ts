import { PlayerCharacter } from '../../../characters/player.character';
import { StartScenario } from '../../../scenarios/start.scenario';

export function startGame(scene: any) {
  console.log('-- scene', scene);
  const startScenario: StartScenario = new StartScenario({
    console: scene.consoleSection,
    input: scene.inputSection,
    window: scene.windowSection,
  });
  startScenario.exec();

  const app = document.getElementById('app');
  app?.addEventListener('click', () => {
    scene.inputSection.focus();
    scene.windowSection.hide();
  });

  const player: PlayerCharacter = scene.characters.get('player');

  player.health.reset();
  player.health.max += 1;
  player.health.value += 10;

  player.health.save();

  console.log('player.map', player.map);
  console.log({ value: player.map.value });
  player.map.col -= 1;
  player.map.row -= 3;
  console.log({ value: player.map.value });
  player.map.col += 1;
  player.map.row += 3;
  console.log({ value: player.map.value });
  player.map.col += 1;
  player.map.row += 3;
  console.log({ value: player.map.value });
  player.map.col += 1;
  player.map.row += 3;
  console.log({ value: player.map.value });
  player.map.col += 1;
  player.map.row += 3;
  console.log({ value: player.map.value });

  player.map.value = 'n';
  console.log({ value: player.map.value });
  console.log({ map: player.map });
  player.map.col -= 2;
  player.map.row += 2;
  console.log({ value: player.map.value });
  console.log({ map: player.map });

  const a = player.map.findValueByCoords(1, 2);
  console.log('findValueByCoords(1, 2)', a);
  const b = player.map.findCoordsByValue('n');
  console.log('findCoordsByValue(n)', b);

  console.log('голод', player.status.push('голод'));
  console.log('озноб', player.status.push('озноб'));
  console.log('холодно', player.status.push('холодно'));
  console.log('жарко', player.status.push('жарко'));
  console.log('голод', player.status.pop('голод'));
  console.log('хочется спать', player.status.push('хочется спать'));
  player.status.save();
  console.log(player.status.get());

  console.log(':', player.walk.value);
  player.walk.value = 'влево';
  console.log('влево', player.walk.value);
  player.walk.value = 'запад';
  console.log('запад', player.walk.value);
  player.walk.value = 'восток';
  console.log('восток', player.walk.value);
  player.walk.value = 'юг';
  console.log('юг', player.walk.value);
  player.walk.value = 'вверх';
  console.log('вверх', player.walk.value);
  player.walk.value = 'север';
  console.log('север', player.walk.value);
  player.walk.save();
}
