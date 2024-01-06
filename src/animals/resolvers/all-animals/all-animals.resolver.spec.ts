import { animalRepository } from '../../repository/animal.repository';
import { allAnimalsResolver } from './all-animals.resolver';

describe('Test all-animals.resolver', () => {
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
