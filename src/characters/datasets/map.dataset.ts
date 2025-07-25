import { MatrixInterface } from '../../states/interfaces/matrix.interface';

const matrix = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r'],
  ['s', 't', 'u'],
  ['v', 'w', 'x'],
];

export const map: MatrixInterface = {
  currentCol: 0,
  currentRow: 0,
  defaultCol: 0,
  defaultRow: 0,
  blocked: true,
  map: matrix,
};
