import { animalRepository } from '../../repository/animal.repository';
import { animalResolver } from './animal.resolver';

describe('Test animal.resolver', () => {
  it('should return correct animal when id is supplied', () => {
    const data = animalResolver(undefined, { id: 2 });

    expect(data).toBe(animalRepository.findOne({ id: 2 }));
  });

  it('should return null when non existent id is supplied', () => {
    const data = animalResolver(undefined, { id: 100000000 });

    expect(data).toBe(null);
  });
});
