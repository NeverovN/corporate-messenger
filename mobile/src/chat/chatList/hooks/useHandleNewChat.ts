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
              console.log(exChats);
              console.log(data.createChat);

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
  return () => {
    createChat({ variables: { participants: [] } });
    console.log('new chat button pressed');
  };
};
