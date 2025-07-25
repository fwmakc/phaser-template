import { ArrayInterface } from '../interfaces/array.interface';

const allow = [
  'болезнь',
  'отравление',
  'голод',
  'холодно',
  'жарко',
  'хочется спать',
  'ранение',
];

export const status: ArrayInterface = {
  allow,
  current: [],
  max: 3,
};
