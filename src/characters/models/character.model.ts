import { NumericState } from '../../states/numeric.state';
import { CharacterInterface } from '../interfaces/character.interface';

export class CharacterModel implements CharacterInterface {
  health: NumericState;
  power: NumericState;

  constructor() {}
}
