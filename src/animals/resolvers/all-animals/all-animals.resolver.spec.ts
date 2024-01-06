import { animalRepository } from '../../repository/animal.repository';
import { allAnimalsResolver } from './all-animals.resolver';

describe('Test all-animals.resolver', () => {
  it('should return all animals', () => {
    const data = allAnimalsResolver();

    expect(data).toBe(animalRepository.findAll());
  });
});
