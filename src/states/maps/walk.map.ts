import { SignleStateInterface } from '../interfaces/singleState.interface';

const allow = ['север', 'запад', 'юг', 'восток', ''];

export const walkMap: SignleStateInterface = {
  allow,
  current: '',
  default: '',
};
