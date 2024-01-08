import { animalRepository } from '../../repository/animal.repository';

export const updateAnimalResolver = (
  _obj: any,
  { id, name }: { id: number; name?: string | null }
) => {
  if (name === null) {
    throw new Error();
  }

  return animalRepository.updateOne({ id }, { name });
};
