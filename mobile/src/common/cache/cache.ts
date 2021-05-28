import { InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        token() {
          return tokenVar();
        },
      },
    },
  },
});

export const tokenVar = makeVar('');
