import { NumericModel } from '../../states/models/numeric.model';
import { CharacterInterface } from '../interfaces/character.interface';

export class CharacterModel implements CharacterInterface {
  health: NumericModel;
  power: NumericModel;

  constructor() {}
}
