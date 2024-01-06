import { animalRepository } from '../../repository/animal.repository';
import { animalResolver } from './animal.resolver';

describe('Test animal.resolver', () => {
  it('should call findOne method once', () => {
    const findOneMethod = jest.spyOn(animalRepository, 'findOne');

    animalResolver(undefined, { id: 2 });

    expect(findOneMethod).toHaveBeenCalledTimes(1);
  });

  it('should call findOne method with id passed from resolver', () => {
    const findOneMethod = jest.spyOn(animalRepository, 'findOne');

    animalResolver(undefined, { id: 2 });

    expect(findOneMethod).toHaveBeenCalledWith({ id: 2 });
  });

  it('should return correct animal when id is supplied', () => {
    const animal = { id: 2, name: 'Animal2', dateCreated: 123 };

    jest.spyOn(animalRepository, 'findOne').mockReturnValue(animal);

    const data = animalResolver(undefined, { id: 2 });

    expect(data).toBe(animal);
  });

  it('should return null when non existent id is supplied', () => {
    const animal = null;

    jest.spyOn(animalRepository, 'findOne').mockReturnValue(animal);

    const data = animalResolver(undefined, { id: 100000000 });

    expect(data).toBe(animal);
  });
});
