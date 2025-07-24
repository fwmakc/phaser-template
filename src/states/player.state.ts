import { ArrayStateClass } from './classes/arrayState.class';
import { NumericStateClass } from './classes/numericState.class';
import { SingleStateClass } from './classes/singleState.class';
import { healthMap } from './maps/health.map';
import { manaMap } from './maps/mana.map';
import { statusMap } from './maps/status.map';
import { walkMap } from './maps/walk.map';

export class PlayerState {
  health: NumericStateClass;
  mana: NumericStateClass;
  status: ArrayStateClass;
  walk: SingleStateClass;

  constructor() {
    this.health = new NumericStateClass('player-health', healthMap);
    this.health.load();

    this.mana = new NumericStateClass('player-mana', manaMap);
    this.mana.load();

    this.status = new ArrayStateClass('player-status', statusMap);
    this.status.load();

    this.walk = new SingleStateClass('player-walk', walkMap);
    this.walk.load();
  }
}
