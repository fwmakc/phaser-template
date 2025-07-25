import { ArrayModel } from './models/array.model';
import { NumericModel } from './models/numeric.model';
import { SingleModel } from './models/single.model';
import { health } from './datasets/health.dataset';
import { mana } from './datasets/mana.dataset';
import { status } from './datasets/status.dataset';
import { walk } from './datasets/walk.dataset';

export class PlayerState {
  health: NumericModel;
  mana: NumericModel;
  status: ArrayModel;
  walk: SingleModel;

  constructor() {
    this.health = new NumericModel('player-health', health);
    this.health.load();

    this.mana = new NumericModel('player-mana', mana);
    this.mana.load();

    this.status = new ArrayModel('player-status', status);
    this.status.load();

    this.walk = new SingleModel('player-walk', walk);
    this.walk.load();
  }
}
