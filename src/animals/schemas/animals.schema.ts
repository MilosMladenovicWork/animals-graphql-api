import { makeExecutableSchema } from '@graphql-tools/schema';

export const data = {
  animals: [
    { id: '001', name: 'Cat' },
    { id: '002', name: 'Dog' },
  ],
};

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
    allAnimals: (_obj: any, _args: any, _context: any, _info: any) =>
      data.animals,
  },
};

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
