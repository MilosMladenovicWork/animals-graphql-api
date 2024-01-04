import { makeExecutableSchema } from '@graphql-tools/schema';
import { allAnimalsResolver } from '../resolvers/all-animals.resolver';
import { animalResolver } from '../resolvers/animal.resolver';
import { createAnimalResolver } from '../resolvers/create-animal.resolver';

const typeDefs = `
type Animal {
  id: Int!
  name: String!
}

type Query {
  allAnimals: [Animal]
  animal(id: ID): Animal
}

type Mutation {
  createAnimal(name: String!): Animal
}
`;

const resolvers = {
  Query: {
    animal: animalResolver,
    allAnimals: allAnimalsResolver,
  },
  Mutation: {
    createAnimal: createAnimalResolver,
  },
};

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
