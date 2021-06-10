import {
  useGetChatsQuery,
  useNewChatSubscription,
} from 'common/types/gql.generated';

export const useChatList = () => {
  const { data } = useGetChatsQuery();
  useNewChatSubscription();

  if (!data || !data.getChats) {
    return [] as any;
  }

  const chats = data.getChats.map((el) => {
    if (!el) {
      return [] as any;
    }
    return {
      data: el,
      title: el.id,
      participants: el.participants,
      id: el.id,
    };
  });

  return chats;
};
