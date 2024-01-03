import { animalsData } from '../data/animals.data';

export const allAnimalsResolver = (
  _obj: any,
  _args: any,
  _context: any,
  _info: any
) => animalsData.animals;
