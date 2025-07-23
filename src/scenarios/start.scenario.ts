import { ScenarioClass } from '../classes/scenario.class';

export class StartScenario extends ScenarioClass {
  exec() {
    const texts = [
      'Я тестовая программа!',
      'Здесь доступна всего одна команда "привет"',
      'Введи комманду:',
    ];

    texts.forEach((text) => {
      this.console.print(text);
    });

    this.input.setActive();
  }
}
