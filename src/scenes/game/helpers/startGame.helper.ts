import { StartScenario } from '../../../scenarios/start.scenario';
import { PlayerCharacter } from '../../../characters/player.character';

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

  const player = new PlayerCharacter();
  // scene.characters.set('player', player);

  player.health.value += 10;
  player.health.max += 1;

  player.health.save();

  console.log(player.health);

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
