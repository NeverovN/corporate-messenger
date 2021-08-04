import {
  useNewMessageSubscription,
  useGetChatByIdQuery,
  MessageFragmentFragmentDoc,
} from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from '../../chatList/types/routes';
import { IMessageItem } from '../types/message';

// utils
import { getName } from '@/profile/utils/getName';
import { MediaUploader } from '../utils/MediaUploader';

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
          getChatById() {
            try {
              client.cache.writeFragment({
                fragment: MessageFragmentFragmentDoc,
                data: message,
              });
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
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
    const { media, mediaCount } = MediaUploader.getManyFromFirebase(
      el?.content.media || null,
    );

    return {
      currentUserId: data.getUser.id,
      id: el?.id || '',
      content: {
        text: el?.content.text || null,
        media: media,
        mediaCount,
      },
      createdAt: el?.createdAt || '',
      author: { name, id: el?.author.id || '' },
      lastEdit: el?.lastEdit || '',
      isRead: isRead,
      setEditMessage: setEditMsg,
    };
  });
};
