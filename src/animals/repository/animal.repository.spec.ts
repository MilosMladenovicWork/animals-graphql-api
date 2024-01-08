import * as convertJsDateToUnix from '../../common/util/convert-js-date-to-unix';
import { AnimalRepository } from './animal.repository';

describe('Test animal.repository', () => {
  describe('findAll', () => {
    it('findAll should return all animals', () => {
      const animalRepository = new AnimalRepository();

      expect(animalRepository.findAll()).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('findOne should return null when animal is not found', () => {
      const animalRepository = new AnimalRepository();

      expect(animalRepository.findOne({ id: 1234 })).toEqual(null);
    });

    it('findOne should return animal when animal is found', () => {
      const animalRepository = new AnimalRepository();

      const animal = { id: 1234, name: 'Animal', dateCreated: 1234 };

      animalRepository.save({ animal });

      expect(animalRepository.findOne({ id: animal.id })).toEqual(animal);
    });
  });

  describe('create', () => {
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

    it('create should generate correct ids', () => {
      const animalRepository = new AnimalRepository();

      const animal1 = animalRepository.create({ name: 'Animal1' });

      animalRepository.save({ animal: animal1 });

      expect(animal1.id).toBe(1);

      const animal2 = animalRepository.create({ name: 'Animal2' });

      expect(animal2.id).toBe(2);
    });
  });

  describe('save', () => {
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

    it('save should save animals in correct order', () => {
      const animalRepository = new AnimalRepository();

      const animal1 = { id: 1, name: 'Animal1', dateCreated: 1234 };

      const animal2 = { id: 1, name: 'Animal1', dateCreated: 1234 };

      animalRepository.save({ animal: animal1 });

      animalRepository.save({ animal: animal2 });

      expect(animalRepository.getAnimals()).toEqual([animal1, animal2]);
    });
  });

  describe('deleteOne', () => {
    it('deleteOne should return null if animal is not found', () => {
      const animalRepository = new AnimalRepository();

      const deletedAnimal = animalRepository.deleteOne({ id: 1234 });

      expect(deletedAnimal).toEqual(null);
    });

    it('deleteOne should return deleted animal', () => {
      const animalRepository = new AnimalRepository();

      const animal = { id: 1234, name: 'Animal', dateCreated: 123 };

      animalRepository.save({
        animal,
      });

      const deletedAnimal = animalRepository.deleteOne({ id: animal.id });

      expect(deletedAnimal).toEqual(animal);
    });

    it('deleteOne should delete animal and don`t change order', () => {
      const animalRepository = new AnimalRepository();

      const animal1 = { id: 1, name: 'Animal1', dateCreated: 123 };

      animalRepository.save({
        animal: animal1,
      });

      const animal2 = { id: 2, name: 'Animal2', dateCreated: 123 };

      animalRepository.save({
        animal: animal2,
      });

      const animal3 = { id: 3, name: 'Animal3', dateCreated: 123 };

      animalRepository.save({
        animal: animal3,
      });

      animalRepository.deleteOne({ id: animal2.id });

      expect(animalRepository.getAnimals()).toEqual([animal1, animal3]);
    });
  });

  describe('updateOne', () => {
    it('updateOne should return null if animal is not found', () => {
      const animalRepository = new AnimalRepository();

      animalRepository.save({
        animal: { id: 1, name: 'Animal', dateCreated: 123 },
      });

      const returnValue = animalRepository.updateOne(
        { id: 1234 },
        { name: 'Animal' }
      );

      expect(returnValue).toEqual(null);
    });

    it('updateOne should return null if name is undefined', () => {
      const animalRepository = new AnimalRepository();

      animalRepository.save({
        animal: { id: 1, name: 'Animal', dateCreated: 123 },
      });

      const returnValue = animalRepository.updateOne(
        { id: 1 },
        { name: undefined }
      );

      expect(returnValue).toEqual(null);
    });

    it('updateOne should update animal and preserve order', () => {
      const animalRepository = new AnimalRepository();

      const animal1 = { id: 1, name: 'Animal1', dateCreated: 123 };

      animalRepository.save({
        animal: animal1,
      });

      const animal2 = { id: 2, name: 'Animal2', dateCreated: 123 };

      animalRepository.save({
        animal: animal2,
      });

      const animal3 = { id: 3, name: 'Animal3', dateCreated: 123 };

      animalRepository.save({
        animal: animal3,
      });

      const newName = 'Animal2Changed';

      animalRepository.updateOne({ id: animal2.id }, { name: newName });

      expect(animalRepository.getAnimals()).toEqual([
        animal1,
        { ...animal2, name: newName },
        animal3,
      ]);
    });
  });

  describe('getAnimals', () => {
    it('getAnimals should return empty array on repository instantiation', () => {
      const animalRepository = new AnimalRepository();

      expect(animalRepository.getAnimals()).toEqual([]);
    });
  });
});
