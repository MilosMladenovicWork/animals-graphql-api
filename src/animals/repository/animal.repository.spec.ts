import { animalRepository } from './animal.repository';

describe('Test animal.repository', () => {
  it('findAll should return all animals', () => {
    const animals = [
      { id: 1, name: 'Cat', dateCreated: 1704398763 },
      { id: 2, name: 'Dog', dateCreated: 1704398763 },
    ];

    expect(animalRepository.findAll()).toEqual(animals);
  });
});
