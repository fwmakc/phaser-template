import { NumericStateClass } from '../../states/classes/numericState.class';
import { CharacterInterface } from '../interfaces/character.interface';

export class CharacterClass implements CharacterInterface {
  health: NumericStateClass;
  power: NumericStateClass;

  constructor() {}
}
