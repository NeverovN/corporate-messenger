<<<<<<< HEAD
import { ApolloServer } from 'apollo-server';
=======
import express from 'express';
import { ApolloServer } from 'apollo-server';
import compression from 'compression';
>>>>>>> feature/messeges-setup

import schema from '../gql/schema';
import getUserIdByToken from '../utils/getUserIdByToken';
import { ApolloContextType } from '../types/apollo';

export function initServer(port: number): void {
  const SUCCESS_MESSAGE = `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`;
<<<<<<< HEAD
  const server = new ApolloServer({
    schema,
    context: ({ req }): ApolloContextType => {
      const token = req?.headers.authorization || '';
=======

  const server = new ApolloServer({
    schema,
    context: ({ req }): ApolloContextType => {
      // Get the user token from the headers.
      const token = req?.headers.authorization || '';

>>>>>>> feature/messeges-setup
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

<<<<<<< HEAD
  server.listen(port);
=======
  server.listen(3000);
>>>>>>> feature/messeges-setup

  console.log(SUCCESS_MESSAGE);
}
