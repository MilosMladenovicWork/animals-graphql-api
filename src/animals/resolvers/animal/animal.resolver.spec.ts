import { animalsData } from '../../data/animals.data';
import { animalResolver } from './animal.resolver';

describe('Test animal.resolver', () => {
  it('should return correct animal when id is supplied', () => {
    const data = animalResolver(undefined, { id: 2 });

    expect(data).toBe(animalsData.animals[1]);
  });

  it('should return first animal when non existent id is supplied', () => {
    const data = animalResolver(undefined, { id: 100000000 });

    expect(data).toBe(animalsData.animals[0]);
  });
});
