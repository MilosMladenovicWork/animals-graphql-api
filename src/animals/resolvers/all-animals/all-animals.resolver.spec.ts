import { animalsData } from '../../data/animals.data';
import { allAnimalsResolver } from './all-animals.resolver';

describe('Test all-animals.resolver', () => {
  it('should return all animals', () => {
    const data = allAnimalsResolver();

    expect(data).toBe(animalsData.animals);
  });
});
