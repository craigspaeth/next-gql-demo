import { GraphQLServer } from 'graphql-yoga'
import gql from 'tagged-template-noop'
import Patient from './graphql/patient/index.mjs'

const resolvers = {
  Query: {
    ...Patient.resolvers.queries
  },
  Mutation: {
    ...Patient.resolvers.mutations
  },
  Patient: (root) => {
    const buddy = db.find(root.erBuddyId)
    return {
      id: buddy.id,
      firstName: buddy.name.split(' ')[0],
      lastName: buddy.name.split(' ')[1],
    }
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

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))