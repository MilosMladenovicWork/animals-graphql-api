import { makeExecutableSchema } from '@graphql-tools/schema';
import { allAnimalsResolver } from '../resolvers/all-animals.resolver';
import { animalResolver } from '../resolvers/animal.resolver';

const typeDefs = `
type Animal {
  id: ID!
  name: String!
}

type Query {
  allAnimals: [Animal]
  animal(id: ID): Animal
}
`;

const resolvers = {
  Query: {
    animal: animalResolver,
    allAnimals: allAnimalsResolver,
  },
};

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
