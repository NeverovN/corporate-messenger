import { GetChatByIdQueryResult } from 'common/types/gql.generated';

export const setLastMessage = (chat: GetChatByIdQueryResult) => {
  return chat.data?.getChatById?.messages?.find(() => true)?.content;
};
