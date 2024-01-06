import { animalRepository } from '../../repository/animal.repository';

export const animalResolver = (_: any, { id }: { id: number }) =>
  animalRepository.findOne({ id });
