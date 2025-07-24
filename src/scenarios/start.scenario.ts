import { ScenarioClass } from './classes/scenario.class';

export class StartScenario extends ScenarioClass {
  exec() {
    const texts = [
      'Я тестовая программа!',
      'Здесь доступна команда "привет" и ввод чисел',
      'Введите что-нибудь:',
    ];

    texts.forEach((text) => {
      this.console.print(text);
    });

    this.input.setActive();
  }
}
