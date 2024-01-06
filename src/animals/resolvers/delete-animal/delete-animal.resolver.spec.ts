import { animalRepository } from '../../repository/animal.repository';
import { deleteAnimalResolver } from './delete-animal.resolver';

describe('Test delete-animal.resolver', () => {
  it('should call deleteOne repository method once', () => {
    const deleteOneMethod = jest.spyOn(animalRepository, 'deleteOne');

    deleteAnimalResolver(undefined, { id: 1 });

    expect(deleteOneMethod).toHaveBeenCalledTimes(1);
  });

  it('should call deleteOne repository without arguments', () => {
    const deleteOneMethod = jest.spyOn(animalRepository, 'deleteOne');

    deleteAnimalResolver(undefined, { id: 1 });

    expect(deleteOneMethod).toHaveBeenCalledWith({ id: 1 });
  });

  it('should return deleted animal', () => {
    const animal = { id: 1, name: 'Animal1', dateCreated: 123 };

    jest.spyOn(animalRepository, 'deleteOne').mockReturnValue(animal);

    const data = deleteAnimalResolver(undefined, { id: 1 });

    expect(data).toEqual(animal);
  });

  it('should return null when animal is not found', () => {
    const animal = null;

    jest.spyOn(animalRepository, 'deleteOne').mockReturnValue(animal);

    const data = deleteAnimalResolver(undefined, { id: 10000000 });

    expect(data).toEqual(animal);
  });

  // TODO: test if actual data has changed after deletion
  // consider using mock
});
