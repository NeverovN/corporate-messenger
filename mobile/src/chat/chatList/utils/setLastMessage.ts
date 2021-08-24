import { GetChatByIdQueryResult } from 'common/types/gql.generated';

export const setLastMessage = (chat: GetChatByIdQueryResult) => {
  if (chat.data?.getChatById?.messages?.length === 0) {
    return 'empty';
  }
  const lastMsg = chat.data?.getChatById?.messages?.find(() => true)?.content
    .text;
  if (!lastMsg) {
    return 'photo';
  }

  if (lastMsg.length > 30) {
    return `${lastMsg.slice(0, 30)}...`;
  }

  return lastMsg;
};
