import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';

import schema from '../gql/schema';

export function initServer(port: number): void {
  const SUCCESS_MESSAGE = `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`;

  const app = express();
  const server = new ApolloServer({
    schema,
  });

  app.use(compression());
  app.listen(3000);

  server.applyMiddleware({ app, path: '/graphql' });

  console.log(SUCCESS_MESSAGE);
}
