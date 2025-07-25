import { ArrayInterface } from '../../states/interfaces/array.interface';

const allowList = [
  'болезнь',
  'отравление',
  'голод',
  'холодно',
  'жарко',
  'хочется спать',
  'ранение',
];

export const status: ArrayInterface = {
  allowList,
  currentList: [],
  maxLength: 3,
};
