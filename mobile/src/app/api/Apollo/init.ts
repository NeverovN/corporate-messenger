import { ApolloClient, InMemoryCache } from '@apollo/client';

import link from './links';

export default function initClient() {
  const client = new ApolloClient({
    version: '0.1',
    cache: new InMemoryCache(),
    link,
  });

  return client;
}
