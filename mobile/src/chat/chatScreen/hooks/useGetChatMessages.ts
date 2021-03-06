import {
  useNewMessageSubscription,
  useGetChatByIdQuery,
} from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from '../../chatList/types/routes';
import { IMessageItem } from '../types/message';

// utils
import { getName } from '@/profile/utils/getName';

export const useGetChatMessages = (
  setEditMsg: (msg: IMessageItem | null) => void,
) => {
  const { params } = useRoute<ChatRouteProp>();

  if (!params) {
    throw Error('chat does not exist');
  }

  const { data } = useGetChatByIdQuery({
    variables: { chatId: params.chatId },
  });

  useNewMessageSubscription({
    variables: { chatId: params.chatId },
    onSubscriptionData: ({ subscriptionData, client }) => {
      const message = subscriptionData.data?.newMessage;

      if (!message) {
        throw Error('update error');
      }

      client.cache.modify({
        fields: {
          getChatById() {},
        },
      });
    },
  });

  if (
    !data ||
    !data.getUser ||
    !data.getChatById ||
    !data.getChatById.messages
  ) {
    return [];
  }

  return data.getChatById.messages.map((el) => {
    const isRead =
      el?.readBy &&
      el?.readBy.length > 1 &&
      el?.readBy.find((user) => user.id === data.getUser.id)
        ? true
        : false;

    const name = getName(el?.author.firstName || '', el?.author.lastName || '');

    return {
      currentUserId: data.getUser.id,
      id: el?.id || '',
      content: {
        text: el?.content.text || null,
        media: el?.content.media || [],
        mediaCount: el?.content.media?.length || 0,
      },
      createdAt: el?.createdAt || '',
      author: { name, id: el?.author.id || '' },
      lastEdit: el?.lastEdit || '',
      isRead: isRead,
      setEditMessage: setEditMsg,
    };
  });
};
