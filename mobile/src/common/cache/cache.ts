import { ICommentItem } from '@/feed/types/comment';
import { IPostItem } from '@/feed/types/feed';
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
        newPost() {
          return newPost();
        },
        editPost() {
          return editPost();
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
export const editPost = makeVar<IPostItem>({} as IPostItem);
export const editComment = makeVar<ICommentItem>({} as ICommentItem);
export const theme = makeVar<string>('light');
