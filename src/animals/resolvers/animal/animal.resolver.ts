import { animalsData } from '../../data/animals.data';

export const animalResolver = (_: any, { id }: { id: number }) =>
  animalsData.animals.find((animal) => animal.id === id) ??
  animalsData.animals[0];
