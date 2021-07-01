import { InMemoryCache, makeVar } from '@apollo/client';
import { Post } from 'common/types/gql.generated';

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

export const tokenVar = makeVar<string>('');
export const selectedFriendsVar = makeVar<string[]>([]);
export const newPost = makeVar<Post>({} as Post);
