'use strict'

exports.types = `
  type Query {
    health: String!
  }

  type Mutation {
    echo: String!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

exports.resolvers = {
  Query: {
    health: () => 'ok'
  },
  Mutation: {
    echo: (obj, args) => 'Hello World'
  }
}
