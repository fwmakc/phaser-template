import { SignleInterface } from '../../states/interfaces/single.interface';

const allowList = ['север', 'запад', 'юг', 'восток', ''];

export const walk: SignleInterface = {
  allowList,
  currentValue: '',
  defaultValue: '',
};
