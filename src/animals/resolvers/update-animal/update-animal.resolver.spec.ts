import { animalRepository } from '../../repository/animal.repository';
import { updateAnimalResolver } from './update-animal.resolver';

describe('Test update-animal.resolver', () => {
  it('should call updateOne repository method once', () => {
    const updateOneMethod = jest.spyOn(animalRepository, 'updateOne');

    updateAnimalResolver(undefined, { id: 1 });

    expect(updateOneMethod).toHaveBeenCalledTimes(1);
  });
});
