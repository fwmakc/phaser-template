import { MapInterface } from '../../states/interfaces/map.interface';

const allowKeys = ['голова', 'тело', 'левая рука', 'правая рука'];
// const allowKeys: never[] = [];

export const body: MapInterface<string> = {
  allowKeys,
  currentMap: new Map(),
};
