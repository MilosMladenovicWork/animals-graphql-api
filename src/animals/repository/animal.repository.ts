import { convertJsDateToUnix } from '../../common/util/convert-js-date-to-unix';

type Animal = {
  id: number;
  name: string;
  dateCreated: number;
};
class AnimalRepository {
  private animals: Animal[] = [
    { id: 1, name: 'Cat', dateCreated: 1704398763 },
    { id: 2, name: 'Dog', dateCreated: 1704398763 },
  ];

  findAll(): Animal[] {
    return this.animals;
  }

  findOne({ id }: { id: number }): Animal | null {
    return this.animals.find((animal) => animal.id === id) ?? null;
  }

  create({ name }: { name: string }): Animal {
    const biggestId = this.animals[this.animals.length - 1]?.id;
    const id = biggestId !== undefined ? biggestId + 1 : 1;

    const animal = {
      id,
      name,
      dateCreated: convertJsDateToUnix({ date: new Date() }),
    };

    return animal;
  }

  save({ animal }: { animal: Animal }): Animal {
    this.animals.push(animal);

    return animal;
  }
}

export const animalRepository = new AnimalRepository();
