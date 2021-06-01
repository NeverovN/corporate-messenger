import express from 'express';
import { ApolloServer } from 'apollo-server';
import compression from 'compression';

import schema from '../gql/schema';
import getUserIdByToken from '../utils/getUserIdByToken';
import { ApolloContextType } from '../types/apollo';

export function initServer(port: number): void {
  const SUCCESS_MESSAGE = `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`;

  const server = new ApolloServer({
    schema,
    context: ({ req }): ApolloContextType => {
      // Get the user token from the headers.
      const token = req?.headers.authorization || '';

      if (!token) return { currentUserId: null };

      // Try to retrieve a user with the token
      const currentUserId = getUserIdByToken(token);

      // Add the user to the context
      return { currentUserId };
    },
  });

  server.listen(3000);

  console.log(SUCCESS_MESSAGE);
}
