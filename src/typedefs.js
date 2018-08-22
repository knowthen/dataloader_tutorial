const { gql } = require('apollo-server-express');

export default gql`
  type Query {
    books: [Book]
  }
  type Book {
    id: ID!
    title: String
    description: String
    reviews: [Review]
  }
  type Review {
    id: ID!
    rating: Int!
    title: String
    comment: String
  }
`;
