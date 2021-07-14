import { IChatItem } from '../types/chat';

export const sortCHatsByDate = (chats: IChatItem[]): IChatItem[] => {
  const sortedChats = [...chats];
  return sortedChats.sort(
    (first, second) =>
      new Date(second.lastMsg.date).valueOf() -
      new Date(first.lastMsg.date).valueOf(),
  );
};
