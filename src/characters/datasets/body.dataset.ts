import { MapInterface } from '../../states/interfaces/map.interface';

const allowKeys = ['head', 'body', 'left hand', 'right hand'];

export const body: MapInterface<string> = {
  allowKeys,
  currentMap: new Map(),
};
