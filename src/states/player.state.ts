import { NumericStateClass } from './classes/numericState.class';
import { healthMap } from './maps/health.map';

export class PlayerState {
  health: NumericStateClass;

  constructor() {
    this.health = new NumericStateClass('player-health', healthMap);
    this.health.load();
  }
}
