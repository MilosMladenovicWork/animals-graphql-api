import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
export const allAnimalsSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'allAnimals',
    fields: {
      name: {
        type: GraphQLString,
        resolve: () => 'Cat',
      },
    },
  }),
});
