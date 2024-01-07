import * as convertJsDateToUnix from '../../common/util/convert-js-date-to-unix';
import { AnimalRepository } from './animal.repository';

describe('Test animal.repository', () => {
  it('findAll should return all animals', () => {
    const animalRepository = new AnimalRepository();

    expect(animalRepository.findAll()).toEqual([]);
  });

  it('create should create animal', () => {
    const animalRepository = new AnimalRepository();

    const animalName = 'Animal';

    jest
      .spyOn(convertJsDateToUnix, 'convertJsDateToUnix')
      .mockReturnValue(1234);

    expect(animalRepository.create({ name: animalName })).toEqual({
      id: 1,
      name: animalName,
      dateCreated: 1234,
    });
  });
});
