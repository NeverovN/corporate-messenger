import { selectedFriendsVar } from '@/common/cache/cache';
import {
  useCreateChatMutation,
  ChatFragmentFragmentDoc,
} from '@/common/types/gql.generated';

export const useHandleNewChat = () => {
  const [createChat] = useCreateChatMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getChats(exChats = []) {
            try {
              const newChat = cache.writeFragment({
                fragment: ChatFragmentFragmentDoc,
                data: data.createChat,
              });

              return [...exChats, newChat];
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });

  if (selectedFriendsVar().length === 0) {
    return () => {};
  }

  return () => {
    createChat({ variables: { participants: selectedFriendsVar() } });
  };
};
