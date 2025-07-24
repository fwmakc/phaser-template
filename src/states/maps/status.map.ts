import { ArrayStateInterface } from '../interfaces/arrayState.interface';

const allow = [
  'болезнь',
  'отравление',
  'голод',
  'холодно',
  'жарко',
  'хочется спать',
  'ранение',
];

export const statusMap: ArrayStateInterface = {
  allow,
  current: [],
  max: 3,
};
