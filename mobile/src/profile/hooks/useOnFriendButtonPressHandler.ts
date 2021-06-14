import {
  useAddFriendMutation,
  useGetUserQuery,
  useRemoveFriendMutation,
} from '@/common/types/gql.generated';

export const useOnFriendButtonHandler = (friendId: string) => {
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
    return () => {
      console.log('deleting friend');
      removeFriend({ variables: { friendId } });
    };
  } else {
    return () => {
      console.log('adding friend');
      addFriend({ variables: { friendId } });
    };
  }
};
