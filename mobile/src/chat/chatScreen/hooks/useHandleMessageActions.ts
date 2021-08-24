import { useDeleteMessageMutation } from '@/common/types/gql.generated';
import ACTIONS from 'chat/chatScreen/constants/actions';
import { IMessageItem } from '../types/message';

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
  return (
    action: string,
    message: IMessageItem,
    setEditMessage: (msg: IMessageItem) => void,
  ) => {
    switch (action) {
      case ACTIONS.DELETE: {
        deleteMessage({ variables: { messageId: message.id } });
        break;
      }
      case ACTIONS.EDIT: {
        setEditMessage(message);
      }
    }
  };
};
