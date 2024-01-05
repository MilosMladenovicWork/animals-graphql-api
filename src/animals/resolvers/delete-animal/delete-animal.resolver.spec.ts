import { deleteAnimalResolver } from './delete-animal.resolver';

describe('Test delete-animal.resolver', () => {
  it('should return deleted animal', () => {
    const data = deleteAnimalResolver(undefined, { id: 1 });

    expect(data).toStrictEqual({ dateCreated: 1704398763, id: 1, name: 'Cat' });
  });
});
