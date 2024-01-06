import { animalRepository } from '../../repository/animal.repository';

export const createAnimalResolver = (_obj: any, { name }: { name: string }) => {
  const createdAnimal = animalRepository.create({ name });

  const savedAnimal = animalRepository.save({ animal: createdAnimal });

  return savedAnimal;
};
