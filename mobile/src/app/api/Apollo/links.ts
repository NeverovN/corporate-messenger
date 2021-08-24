import { HttpLink } from '@apollo/client/link/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { RestLink } from 'apollo-link-rest';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { from, split } from '@apollo/client/link/core';
import { getMainDefinition } from '@apollo/client/utilities';

import { BASE_HTTP_URL, BASE_WS_URL } from '@/app/constants/network';

import { tokenVar } from 'common/cache/cache';
import AsyncStorage from '@react-native-community/async-storage';

const httpLink = new HttpLink({ uri: BASE_HTTP_URL });

const restLink = new RestLink({
  uri: 'http://localhost:3000',
});

const wsLink = new WebSocketLink({
  uri: BASE_WS_URL,
  options: {
    reconnect: true,
    connectionParams: {
      authorization: AsyncStorage.getItem('token'),
    },
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const errorLink = onError((error) => {
  // TODO: implement real errorLink (for example clean token from storage in some cases)
  console.log('Network Error ->', error);
});

export const authLink = setContext(async (_, { headers }) => {
  const token = tokenVar();

  headers = {
    ...headers,
    headers: {
      authorization: token,
    },
  };
  return headers;
});

export default from([errorLink, authLink, restLink, link]);
