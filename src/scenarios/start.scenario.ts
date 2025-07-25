import { ScenarioTemplate } from './templates/scenario.template';

export class StartScenario extends ScenarioTemplate {
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
