import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import schema from '../gql/schema';
import getUserIdByToken from '../utils/getUserIdByToken';
import { ApolloContextType } from '../types/apollo';
import express from 'express';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import bodyParser from 'body-parser';

import { userRouter } from '../rest/router';

export function initServer(port: number): void {
  const SUCCESS_MESSAGE = `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`;

  const server = new ApolloServer({
    schema,
    context: ({ req }): Omit<ApolloContextType, 'dataSources'> => {
      const token = req?.headers.authorization || '';

      if (!token) return { currentUserId: null };

      const currentUserId = getUserIdByToken(token);

      return { currentUserId };
    },
    // this code doesn't work even if docs say it should
    subscriptions: {
      onConnect: async ({ authorization }: any) => {
        const currentUser = getUserIdByToken(authorization._W || '');
        return { currentUser };
      },
    },
  });

  const app = express();

  app.use(express.json());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/user', userRouter);

  server.applyMiddleware({ app });

  const httpServer = createServer(app);

  httpServer.listen(port, () => {
    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema,
      },
      {
        server: httpServer,
        path: '/graphql',
      },
    );
  });

  console.log(SUCCESS_MESSAGE);
}
