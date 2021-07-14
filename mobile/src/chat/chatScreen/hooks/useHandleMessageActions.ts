import { editingMessage, editMessageMode } from '@/common/cache/cache';
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
  return (action: string, message: IMessageItem) => {
    switch (action) {
      case ACTIONS.DELETE: {
        deleteMessage({ variables: { messageId: message.id } });
        break;
      }
      case ACTIONS.EDIT: {
        editMessageMode(true);
        editingMessage(message);
      }
    }
  };
};
