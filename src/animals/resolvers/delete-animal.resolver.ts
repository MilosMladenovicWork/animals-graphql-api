import { animalsData } from '../data/animals.data';

export const deleteAnimalResolver = (_obj: any, { id }: { id: number }) => {
  const indexOfToBeDeletedAnimal = animalsData.animals.findIndex(
    (animal) => id === animal.id
  );

  if (indexOfToBeDeletedAnimal === -1) {
    return null;
  }

  const toBeDeletedAnimal = animalsData.animals[indexOfToBeDeletedAnimal];

  animalsData.animals = [
    ...animalsData.animals.slice(0, indexOfToBeDeletedAnimal),
    ...animalsData.animals.slice(indexOfToBeDeletedAnimal + 1),
  ];

  return toBeDeletedAnimal;
};
