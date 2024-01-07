import { animalRepository } from './animal.repository';

describe('Test animal.repository', () => {
  it('findAll should return all animals', () => {
    expect(animalRepository.findAll()).toEqual([]);
  });
});
