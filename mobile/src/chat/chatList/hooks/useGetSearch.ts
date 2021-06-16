import { useChatList } from 'chat/chatList/hooks/useChatList';

export const useGetSearch = (searchString: string) => {
  const users = useChatList(searchString);

  return () => users;
};
