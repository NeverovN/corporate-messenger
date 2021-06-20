import { useGetChatByIdQuery } from '@/common/types/gql.generated';

// utils
import { setLastMessage } from 'chat/chatList/utils/setLastMessage';

export const useGetChatInfo = (chatId: string) => {
  const chatResult = useGetChatByIdQuery({ variables: { chatId } });

  const title = chatResult.data?.getChatById?.title;
  const lastMsg = setLastMessage(chatResult);

  return {
    chatTitle: title,
    lastMsg: lastMsg,
  };
};
