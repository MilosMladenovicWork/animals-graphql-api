import { deleteAnimalResolver } from './delete-animal.resolver';

describe('Test delete-animal.resolver', () => {
  it('should return deleted animal', () => {
    const data = deleteAnimalResolver(undefined, { id: 1 });

    expect(data).toStrictEqual({ dateCreated: 1704398763, id: 1, name: 'Cat' });
  });

  it('should return null when animal is not found', () => {
    const data = deleteAnimalResolver(undefined, { id: 10000000 });

    expect(data).toEqual(null);
  });

  // TODO: test if actual data has changed after deletion
  // consider using mock
});
