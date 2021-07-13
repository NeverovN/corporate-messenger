import { useDeleteMessageMutation } from '@/common/types/gql.generated';
import ACTIONS from 'chat/chatScreen/constants/actions';

export const useHandleMessageActions = () => {
  const [deleteMessage] = useDeleteMessageMutation({
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
  return (action: string, messageId: string) => {
    switch (action) {
      case ACTIONS.DELETE: {
        deleteMessage({ variables: { messageId } });
        break;
      }
      case ACTIONS.EDIT: {
      }
    }
  };
};

type MessageType = {
  id: string;
  content: string;
  createdAt: string;
  author: string;
};
