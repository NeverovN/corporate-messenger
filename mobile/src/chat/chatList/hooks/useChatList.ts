import {
  ChatFragmentFragmentDoc,
  useGetChatsQuery,
  useNewChatSubscription,
} from 'common/types/gql.generated';

// types
import { IChatItem } from '../types/chat';

// utils
import { filterChats } from '../utils/filterChats';
import { getLastItem } from '../utils/getLastItem';
import { sortCHatsByDate } from '../utils/sortChatsByDate';

export const useChatList = (filter: string): IChatItem[] => {
  const { data } = useGetChatsQuery();
  useNewChatSubscription({
    onSubscriptionData: (subscriptionData) => {
      if (!subscriptionData.subscriptionData.data) {
        throw new Error('Invalid response');
      }

      subscriptionData.client.cache.modify({
        fields: {
          getChats(exChats = []) {
            try {
              const newChat = subscriptionData.client.cache.writeFragment({
                fragment: ChatFragmentFragmentDoc,
                data: subscriptionData.subscriptionData?.data?.newChat,
              });

              return [...exChats, newChat];
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });

  if (!data || !data.getChats) {
    return [] as any;
  }

  const chats = data.getChats.map((el) => {
    if (!el) {
      return [] as any;
    }

    const lastMsgDate = getLastItem(el.messages)?.createdAt;

    return {
      title: el.title,
      participants: el.participants,
      id: el.id,
      lastMsg: { date: lastMsgDate || new Date() },
      unreadCount:
        el.messages?.reduce((acc, msg) => {
          return msg?.readBy.find((user) => user.id === data.getUser.id)
            ? acc
            : acc + 1;
        }, 0) || 0,
    };
  });

  const filteredChats = filterChats(chats, filter);

  return sortCHatsByDate(filteredChats);

  // return filteredChats;
};
