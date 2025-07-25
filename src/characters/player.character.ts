import { ArrayState } from '../states/array.state';
import { NumericState } from '../states/numeric.state';
import { SingleState } from '../states/single.state';
import { health } from './datasets/health.dataset';
import { mana } from './datasets/mana.dataset';
import { status } from './datasets/status.dataset';
import { walk } from './datasets/walk.dataset';

export class PlayerCharacter {
  health: NumericState;
  mana: NumericState;
  status: ArrayState;
  walk: SingleState;

  constructor() {
    this.health = new NumericState('player-health', health);
    this.health.load();

    this.mana = new NumericState('player-mana', mana);
    this.mana.load();

    this.status = new ArrayState('player-status', status);
    this.status.load();

    this.walk = new SingleState('player-walk', walk);
    this.walk.load();
  }
}
