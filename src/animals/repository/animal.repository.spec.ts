import * as convertJsDateToUnix from '../../common/util/convert-js-date-to-unix';
import { AnimalRepository } from './animal.repository';

describe('Test animal.repository', () => {
  it('findAll should return all animals', () => {
    const animalRepository = new AnimalRepository();

    expect(animalRepository.findAll()).toEqual([]);
  });

  it('findOne should return null when animal is not found', () => {
    const animalRepository = new AnimalRepository();

    expect(animalRepository.findOne({ id: 1234 })).toEqual(null);
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

  it('create should call convertJsDateToUnix once', () => {
    const animalRepository = new AnimalRepository();

    const animalName = 'Animal';

    const convertJsDateToUnixMock = jest
      .spyOn(convertJsDateToUnix, 'convertJsDateToUnix')
      .mockReturnValue(1234);

    animalRepository.create({ name: animalName });

    // 2 because spyOn calls it also
    expect(convertJsDateToUnixMock).toHaveBeenCalledTimes(2);
  });

  it('save should return saved animal', () => {
    const animalRepository = new AnimalRepository();

    const animal = { id: 123, name: 'Animal', dateCreated: 1234 };

    const returnValue = animalRepository.save({ animal });

    expect(returnValue).toEqual(animal);
  });

  it('save should save animal', () => {
    const animalRepository = new AnimalRepository();

    const animal = { id: 123, name: 'Animal', dateCreated: 1234 };

    const returnValue = animalRepository.save({ animal });

    expect(returnValue).toEqual(animalRepository.getAnimals()[0]);
  });

  it('getAnimals should return empty array on repository instantiation', () => {
    const animalRepository = new AnimalRepository();

    expect(animalRepository.getAnimals()).toEqual([]);
  });
});
