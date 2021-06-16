import {
  useAddFriendMutation,
  useGetUserQuery,
  useRemoveFriendMutation,
} from '@/common/types/gql.generated';

// consts
import TITLES from '../constants/friendButtonTitles';

export const useOnFriendButtonHandler = (
  friendId: string,
): [() => void, string] => {
  const [addFriend] = useAddFriendMutation({
    update: (cache) => {
      cache.modify({
        fields: {
          getUser() {},
        },
      });
    },
  });

  const [removeFriend] = useRemoveFriendMutation({
    update: (cache) => {
      cache.gc();
    },
  });

  const { data } = useGetUserQuery();

  if (!data || !data.getUser) {
    throw Error('network error');
  }

  if (data.getUser.friends.find((user) => user.id === friendId)) {
    return [
      () => {
        removeFriend({ variables: { friendId } });
      },
      TITLES.REMOVE,
    ];
  } else {
    return [
      () => {
        addFriend({ variables: { friendId } });
      },
      TITLES.ADD,
    ];
  }
};
