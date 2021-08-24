import { useChatList } from '@/chat/chatList/hooks/useChatList';

export const useSearch = (filter: string) => {
  const users = useChatList(filter).data;

  return () => users;
};
