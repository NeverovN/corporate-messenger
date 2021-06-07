import { ApolloClient } from '@apollo/client';
import { cache } from '@/common/cache/cache';

import link from './links';

export default function initClient() {
  const client = new ApolloClient({
    version: '0.1',
    cache: cache,
    link,
  });

  client.cache.reset();

  return client;
}
