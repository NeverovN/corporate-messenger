import { ApolloServer } from 'apollo-server';

import schema from '../gql/schema';
import getUserIdByToken from '../utils/getUserIdByToken';
import { ApolloContextType } from '../types/apollo';

export function initServer(port: number): void {
  const SUCCESS_MESSAGE = `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`;
  const server = new ApolloServer({
    schema,
    context: ({ req }): ApolloContextType => {
      const token = req?.headers.authorization || '';
      if (!token) return { currentUserId: null };
      const currentUserId = getUserIdByToken(token);
      return { currentUserId };
    },
    subscriptions: {
      onConnect: () => {
        console.log('connected to web socket');
      },
    },
  });

  server.listen(port);

  console.log(SUCCESS_MESSAGE);
}
