import { useDeleteChatByIdMutation } from '@/common/types/gql.generated';
import ACTIONS from 'chat/chatList/constants/actions';

export const useHandleChatActions = () => {
  const [deleteChat] = useDeleteChatByIdMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getChats() {
            try {
              cache.gc();
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });
  return (action: string, chatId: string) => {
    switch (action) {
      case ACTIONS.DELETE: {
        deleteChat({ variables: { chatId } });
      }
    }
  };
};
