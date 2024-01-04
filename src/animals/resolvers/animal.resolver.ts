import { animalsData } from '../data/animals.data';

export const animalResolver = (
  _obj: any,
  _args: any,
  _context: any,
  _info: any
) => animalsData.animals[0];
