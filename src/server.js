import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typedefs';
import resolvers from './resolvers';
import { reviewsDataLoader } from './review';

const settings = {
  'editor.theme': 'light',
  'editor.fontSize': 28,
  'editor.cursorShape': 'line',
};

const server = new ApolloServer({
  playground: { settings },
  typeDefs,
  resolvers,
  context: () => ({
    loaders: {
      reviewsLoader: reviewsDataLoader()
    }
  })
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`),
);
