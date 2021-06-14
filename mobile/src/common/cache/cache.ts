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
    User: {
      fields: {
        friends: {
          merge(_, inc: any[]) {
            return [...inc];
          },
        },
      },
    },
  },
});

export const tokenVar = makeVar('');
