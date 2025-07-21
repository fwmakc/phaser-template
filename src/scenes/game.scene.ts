import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  private randomNumber: number;
  private guessInput!: HTMLInputElement;
  private messageText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'GameScene' });
    this.randomNumber = this.generateRandomNumber(1, 100);
  }

  preload() {}

  create() {
    this.messageText = this.add
      .text(400, 250, 'Угадай число от 1 до 100!', {
        fontSize: '32px',
        color: '#fff',
      })
      .setOrigin(0.5);

    // Создание HTML input
    const element = document.createElement('input');
    element.setAttribute('type', 'number');
    element.setAttribute('placeholder', 'Введите число...');
    element.style.fontSize = '32px';
    element.style.position = 'absolute';
    element.style.left = '50%';
    element.style.top = '300px';
    element.style.transform = 'translateX(-50%)';
    document.body.appendChild(element);

    this.guessInput = element;
    this.guessInput.addEventListener('change', () => this.checkGuess());
  }

  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private checkGuess() {
    const guessedNumber = Number(this.guessInput?.value);
    if (isNaN(guessedNumber)) {
      this.messageText.setText('Пожалуйста, введите валидное число.');
    } else if (guessedNumber < this.randomNumber) {
      this.messageText.setText('Слишком низкое число! Попробуйте еще раз.');
    } else if (guessedNumber > this.randomNumber) {
      this.messageText.setText('Слишком высокое число! Попробуйте еще раз.');
    } else {
      this.messageText.setText('Поздравляю! Вы угадали число!');
    }

    if (this.guessInput) {
      this.guessInput.value = '';
    }
  }
}
