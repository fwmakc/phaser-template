import { ArrayState } from '../states/array.state';
import { MapState } from '../states/map.state';
import { MatrixState } from '../states/matrix.state';
import { NumericState } from '../states/numeric.state';
import { SingleState } from '../states/single.state';
import { body } from './datasets/body.dataset';
import { health } from './datasets/health.dataset';
import { mana } from './datasets/mana.dataset';
import { map } from './datasets/map.dataset';
import { status } from './datasets/status.dataset';
import { walk } from './datasets/walk.dataset';

export class PlayerCharacter {
  body: MapState<string>;
  health: NumericState;
  mana: NumericState;
  status: ArrayState;
  walk: SingleState;
  map: MatrixState;

  constructor() {
    this.body = new MapState<string>('player-body', body);
    this.body.load();

    this.health = new NumericState('player-health', health);
    this.health.load();

    this.mana = new NumericState('player-mana', mana);
    this.mana.load();

    this.map = new MatrixState('player-map', map);
    this.map.load();

    this.status = new ArrayState('player-status', status);
    this.status.load();

    this.walk = new SingleState('player-walk', walk);
    this.walk.load();
  }
}
