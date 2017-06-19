'use strict'

const { posts } = require('../db')

exports.types = `
  type Post {
    id: ID!
    title: String
    content: String
  }

  extend type Query {
    posts: [Post]!
    post(id: ID!): Post
  }

  extend type Mutation {
    createPost(
      title: String!
      content: String!
    ): Post!
  }
`

exports.resolvers = {
  Post: {},
  Query: {
    posts: (obj, args, ctx) => {
      return posts
    },
    post (obj, args, ctx) {
      return posts.find(post => post.id === args.id)
    }
  },
  Mutation: {
    createPost (obj, args) {
      const newPost = {
        id: `${posts.length}`,
        title: args.title,
        content: args.content
      }
      posts.push(newPost)
      return newPost
    }
  }
}
