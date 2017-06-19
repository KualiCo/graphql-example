'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./graphql')

const app = express()

const DEFAULT_QUERY = `
fragment PostData on Post {
  id
  title
  content
}

query PostsQuery {
  posts {
    ...PostData
  }
}

mutation CreatePost {
  createPost(
    title: "My Title"
    content: "My Content"
  ) {
    ...PostData
  }
}
`

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => {
    return {
      schema,
      context: req
    }
  })
)
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    query: DEFAULT_QUERY
  })
)

module.exports = app
