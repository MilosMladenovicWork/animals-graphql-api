import { animalRepository } from '../../repository/animal.repository';

export const updateAnimalResolver = (
  _obj: any,
  { id, name }: { id: number; name?: string | null }
) => {
  return animalRepository.updateOne({ id }, { name });
};
