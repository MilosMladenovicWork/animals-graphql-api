import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { requestLogger } from '../../common/middleware/request-logger.middleware';
import { allAnimalsResolver } from '../resolvers/all-animals.resolver';
import { animalResolver } from '../resolvers/animal.resolver';
import { createAnimalResolver } from '../resolvers/create-animal.resolver';
import { deleteAnimalResolver } from '../resolvers/delete-animal.resolver';
import { updateAnimalResolver } from '../resolvers/update-animal.resolver';

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
  deleteAnimal(id: Int!): Animal
  updateAnimal(id: Int!, name: String): Animal
}
`;

const resolvers = {
  Query: {
    animal: animalResolver,
    allAnimals: allAnimalsResolver,
  },
  Mutation: {
    createAnimal: createAnimalResolver,
    deleteAnimal: deleteAnimalResolver,
    updateAnimal: updateAnimalResolver,
  },
};

const commonMiddleware = [requestLogger()];

const resolversComposition = {
  'Query.animal': [...commonMiddleware],
  'Query.allAnimals': [...commonMiddleware],
  'Mutation.createAnimal': [...commonMiddleware],
  'Mutation.deleteAnimal': [...commonMiddleware],
  'Mutation.updateAnimal': [...commonMiddleware],
};

const composedResolvers = composeResolvers(resolvers, resolversComposition);

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers: composedResolvers,
});
