const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
  }

  type Query {
    users: [User]
    user(firstName: String!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!): User
  }
`;

module.exports = typeDefs;
