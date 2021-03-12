import gql from 'tagged-template-noop'
import { ApolloServer } from 'apollo-server'
import Patient from './graphql/patient/index.mjs'

const resolvers = {
  Query: {
    ...Patient.resolvers.queries
  },
  Mutation: {
    ...Patient.resolvers.mutations
  }
}

const typeDefs = gql`
  ${Patient.types}
  type Query {
    ${Patient.queries}
  }
  type Mutation {
    ${Patient.mutations}
  }
`
new ApolloServer({ typeDefs, resolvers }).listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});