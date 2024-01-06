class AnimalRepository {
  private animals = [
    { id: 1, name: 'Cat', dateCreated: 1704398763 },
    { id: 2, name: 'Dog', dateCreated: 1704398763 },
  ];

  findAll() {
    return this.animals;
  }
}

export const animalRepository = new AnimalRepository();
