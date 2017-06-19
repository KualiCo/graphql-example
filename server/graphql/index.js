'use strict'

const { merge } = require('lodash')
const { makeExecutableSchema } = require('graphql-tools')

const root = require('./root')
const posts = require('./posts')

const schema = makeExecutableSchema({
  typeDefs: [root.types, posts.types],
  resolvers: merge({}, root.resolvers, posts.resolvers)
})

module.exports = schema
