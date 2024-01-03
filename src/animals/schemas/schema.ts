import { makeExecutableSchema } from '@graphql-tools/schema';
import { allAnimalsResolver } from '../resolvers/all-animals.resolver';

const typeDefs = `
type Animal {
  id: ID!
  name: String!
}

type Query {
  allAnimals: [Animal]
}
`;

const resolvers = {
  Query: {
    allAnimals: allAnimalsResolver,
  },
};

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
