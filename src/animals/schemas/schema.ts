import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { requestLogger } from '../../common/middleware/request-logger.middleware';
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

const resolversComposition = {
  'Query.animal': [requestLogger()],
  'Query.allAnimals': [requestLogger()],
  'Mutation.createAnimal': [requestLogger()],
};

const composedResolvers = composeResolvers(resolvers, resolversComposition);

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers: composedResolvers,
});
