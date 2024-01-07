import { AnimalRepository } from './animal.repository';

describe('Test animal.repository', () => {
  it('findAll should return all animals', () => {
    const animalRepository = new AnimalRepository();

    expect(animalRepository.findAll()).toEqual([]);
  });
});
