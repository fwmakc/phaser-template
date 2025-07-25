import { SignleInterface } from '../interfaces/single.interface';

const allow = ['север', 'запад', 'юг', 'восток', ''];

export const walk: SignleInterface = {
  allow,
  current: '',
  default: '',
};
