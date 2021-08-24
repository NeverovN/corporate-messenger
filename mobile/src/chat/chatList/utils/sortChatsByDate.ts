import { IChatItem } from '../types/chat';
import { getFirstItem } from './getFirstItem';

export const sortChatsByDate = (chats: IChatItem[]): IChatItem[] => {
  const sortedChats = [...chats];
  return sortedChats.sort((first, second) => {
    const lastMsg1CreatedAt = getFirstItem(first.messages)?.createdAt;
    const lastMsg2CreatedAt = getFirstItem(second.messages)?.createdAt;

    if (!lastMsg1CreatedAt || !lastMsg2CreatedAt) {
      return 0;
    }
    return (
      new Date(lastMsg2CreatedAt).valueOf() -
      new Date(lastMsg1CreatedAt).valueOf()
    );
  });
};
