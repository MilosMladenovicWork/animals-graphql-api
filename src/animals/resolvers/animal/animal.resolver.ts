import { animalsData } from '../../data/animals.data';

export const animalResolver = (_: any, args: any) =>
  animalsData.animals.find((animal) => animal.id === args.id) ??
  animalsData.animals[0];
