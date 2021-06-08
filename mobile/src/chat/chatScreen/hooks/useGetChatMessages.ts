import {
  useGetMessagesQuery,
  useNewMessageSubscription,
} from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

// types
import { ChatRouteProp } from '../../chatList/types/routes';

export const useGetChatMessages = () => {
  const { params } = useRoute<ChatRouteProp>();

  if (!params) {
    throw Error('chat does not exist');
  }

  const { data: queryData, refetch } = useGetMessagesQuery({
    variables: { chatId: params.chatId },
  });

  const { data: subData } = useNewMessageSubscription({
    variables: { chatId: params.chatId },
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subData]);

  if (!queryData || !queryData.getMessages) {
    return [] as any;
  }

  const messages = queryData.getMessages.map((el) => {
    if (!el) {
      return [] as any;
    }

    return {
      id: el.id,
      content: el.content,
      createdAt: el.createdAt,
      author: el.author,
      onPress: () => console.log(`message ${el.id} pressed`),
    };
  });

  return messages;
};
