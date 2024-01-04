import { animalsData } from '../data/animals.data';

export const animalResolver = (
  _obj: any,
  args: any,
  _context: any,
  _info: any
) =>
  animalsData.animals.find((animal) => animal.id === args.id) ??
  animalsData.animals[0];
