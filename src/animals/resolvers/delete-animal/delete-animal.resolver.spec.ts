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

  it('should return value returned from deleteOne repository method', () => {
    const animal = { id: 1, name: 'Animal1', dateCreated: 123 };

    jest.spyOn(animalRepository, 'deleteOne').mockReturnValue(animal);

    const data = deleteAnimalResolver(undefined, { id: 1 });

    expect(data).toEqual(animal);
  });
});
