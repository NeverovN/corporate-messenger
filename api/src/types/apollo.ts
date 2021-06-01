import { PubSub } from 'apollo-server-express';
import { ID } from './common';

export type ApolloContextType = {
  currentUserId: ID | null;
};
