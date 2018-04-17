import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

// type defs defines graphQL schema code - type is not JS it is GraphQL a QUERY is really just a function ...what comes out from the function--string
const typeDefs = `
type Query {
hi: String
}
`;
// the resolver allows us to define the function (this will be JS) similar to meteor resolver methods
const resolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
createApolloServer({ schema });
