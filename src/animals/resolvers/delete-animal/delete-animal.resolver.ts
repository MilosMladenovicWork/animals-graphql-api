import { animalRepository } from '../../repository/animal.repository';

export const deleteAnimalResolver = (_obj: any, { id }: { id: number }) => {
  return animalRepository.deleteOne({ id });
};
