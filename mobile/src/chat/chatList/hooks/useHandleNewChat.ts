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
            console.log(exChats);

            const newChat = cache.writeFragment({
              fragment: ChatFragmentFragmentDoc,
              data: data.createChat,
            });

            return [...exChats, newChat];
          },
        },
      });
    },
  });
  return () => {
    createChat();
    console.log('new chat button pressed');
  };
};
