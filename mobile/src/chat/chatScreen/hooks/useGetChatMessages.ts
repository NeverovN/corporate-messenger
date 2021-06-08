import {
  useGetMessagesQuery,
  useNewMessageSubscription,
} from '@/common/types/gql.generated';
import MessageContainer from '../containers/Message';

export const useGetChatMessages = () => {
  const { data: queryData, refetch } = useGetMessagesQuery({
    variables: { chatId: '60beb93c5d874c5137d7bba0' },
  });

  const { data: subData } = useNewMessageSubscription({
    variables: { chatId: '60beb93c5d874c5137d7bba0' },
  });

  if (!queryData || !queryData.getMessages) {
    return [] as any;
  }

  const messages = queryData.getMessages.map((el) => {
    if (!el) {
      return [] as any;
    }

    return {
      data: MessageContainer,
      id: el.id,
      content: el.content,
      createdAt: el.createdAt,
      author: el.author,
      onPress: () => console.log(`message ${el.id} pressed`),
    };
  });

  if (subData && subData.messageCreated) {
    refetch();
  }

  return messages;
};
