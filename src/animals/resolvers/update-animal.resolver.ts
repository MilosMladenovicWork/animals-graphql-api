import { animalsData } from '../data/animals.data';

export const updateAnimalResolver = (
  _obj: any,
  { id, name }: { id: number; name?: string }
) => {
  if (name === null || name === undefined) {
    return null;
  }

  const indexOfToBeUpdatedAnimal = animalsData.animals.findIndex(
    (animal) => id === animal.id
  );

  if (indexOfToBeUpdatedAnimal === -1) {
    return null;
  }

  const toBeUpdatedAnimal = animalsData.animals[indexOfToBeUpdatedAnimal];

  toBeUpdatedAnimal.name = name;

  return toBeUpdatedAnimal;
};
