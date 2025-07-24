import { StartScenario } from '../../../scenarios/start.scenario';

export function startGame(scene: any) {
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
}
