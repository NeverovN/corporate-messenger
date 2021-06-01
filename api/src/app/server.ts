// import express from 'express';
import { ApolloServer } from 'apollo-server';
import { PubSub } from 'graphql-subscriptions';
// import compression from 'compression';

import schema from '../gql/schema';
import getUserIdByToken from '../utils/getUserIdByToken';
import { ApolloContextType } from '../types/apollo';

export function initServer(port: number): void {
  const SUCCESS_MESSAGE = `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`;
  const pubsub = new PubSub();
  // const app = express();
  const server = new ApolloServer({
    schema,
    // context: {
    //   pubsub: new PubSub(),
    //   currentUserId: '60b01cd8bca2ef4950d41b5f',
    // },
    context: ({ req }): ApolloContextType => {
      const token = req?.headers.authorization || '';
      if (!token) return { currentUserId: null };
      const currentUserId = getUserIdByToken(token);
      return { currentUserId };
    },
    subscriptions: {
      onConnect: () => {
        console.log('connected to web socet');
      },
    },
  });

  server.listen(port);

  // app.use(compression());
  // app.listen(3000);

  // server.applyMiddleware({ app, path: '/graphql' });

  console.log(SUCCESS_MESSAGE);
}
