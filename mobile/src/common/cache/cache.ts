import { InMemoryCache, makeVar, ReactiveVar } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        token() {
          return tokenVar();
        },
        selectedFriends() {
          return selectedFriendsVar();
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
export const selectedFriendsVar: ReactiveVar<string[]> = makeVar([]);
