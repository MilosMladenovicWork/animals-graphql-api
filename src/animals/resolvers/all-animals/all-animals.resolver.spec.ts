import { animalRepository } from '../../repository/animal.repository';
import { allAnimalsResolver } from './all-animals.resolver';

describe('Test all-animals.resolver', () => {
  it('should call findAll repository method once', () => {
    const findAllMethod = jest.spyOn(animalRepository, 'findAll');

    allAnimalsResolver();

    expect(findAllMethod).toHaveBeenCalledTimes(1);
  });

  it('should call findAll repository without arguments', () => {
    const findAllMethod = jest.spyOn(animalRepository, 'findAll');

    allAnimalsResolver();

    expect(findAllMethod).toHaveBeenCalledWith();
  });

  it('should return all animals', () => {
    const animals = [
      { id: 1, name: 'Animal1', dateCreated: 123 },
      { id: 2, name: 'Animal2', dateCreated: 123 },
    ];

    jest.spyOn(animalRepository, 'findAll').mockReturnValue(animals);

    const data = allAnimalsResolver();

    expect(data).toBe(animals);
  });
});
