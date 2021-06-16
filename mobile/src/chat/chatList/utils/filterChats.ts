import { IChatItem } from '../types/chat';

export const filterChats = (chats: IChatItem[], filter: string) => {
  filter = filter.toLowerCase().replace(/\s/g, '');

  const filteredUsers: IChatItem[] = chats.filter((chat) =>
    chat.title.toLowerCase().startsWith(filter),
  );

  return filteredUsers;
};
