import {
  useChatDeletedSubscription,
  useDeleteChatByIdMutation,
} from '@/common/types/gql.generated';
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

  useChatDeletedSubscription({
    onSubscriptionData: (subData) => {
      if (!subData.subscriptionData.data) {
        throw new Error('Invalid sub data');
      }

      subData.client.cache.modify({
        fields: {
          getChats(exChats, { readField }) {
            return exChats.filter(
              (chatRef) =>
                subData.subscriptionData.data?.chatDeleted.id !==
                readField('id', chatRef),
            );
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
