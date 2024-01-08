import { animalRepository } from '../../repository/animal.repository';
import { updateAnimalResolver } from './update-animal.resolver';

describe('Test update-animal.resolver', () => {
  it('should call updateOne repository method once', () => {
    const updateOneMethod = jest.spyOn(animalRepository, 'updateOne');

    updateAnimalResolver(undefined, { id: 1 });

    expect(updateOneMethod).toHaveBeenCalledTimes(1);
  });

  it('should call updateOne repository with passed arguments', () => {
    const updateOneMethod = jest.spyOn(animalRepository, 'updateOne');

    const id = 1;

    const name = 'Animal';

    updateAnimalResolver(undefined, { id, name });

    expect(updateOneMethod).toHaveBeenCalledWith({ id }, { name });
  });

  it('should return value returned from updateOne repository method', () => {
    const animal = { id: 1, name: 'Animal1', dateCreated: 123 };

    jest.spyOn(animalRepository, 'updateOne').mockReturnValue(animal);

    const data = updateAnimalResolver(undefined, {
      id: animal.id,
      name: animal.name,
    });

    expect(data).toEqual(animal);
  });

  it('should throw error if null value is supplied as a name', () => {
    const data = updateAnimalResolver(undefined, {
      id: 1,
      name: null,
    });

    expect(data).toThrow(new Error());
  });
});
