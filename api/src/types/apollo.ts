import { RESTApi } from '../rest';
import { ID } from './common';

export type ApolloContextType = {
  currentUserId: ID | null;
  dataSources: {
    restAPI: RESTApi;
  };
};
