import { NameShouldBeNonNullValueError } from '../../errors/name-should-be-non-null-value.error';
import { animalRepository } from '../../repository/animal.repository';

export const updateAnimalResolver = (
  _obj: any,
  { id, name }: { id: number; name?: string | null }
) => {
  if (name === null) {
    throw new NameShouldBeNonNullValueError();
  }

  return animalRepository.updateOne({ id }, { name });
};
