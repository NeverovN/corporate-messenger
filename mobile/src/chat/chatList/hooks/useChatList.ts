import { NetworkStatus } from '@apollo/client';
import {
  useGetChatsQuery,
  useNewChatSubscription,
} from 'common/types/gql.generated';

// types
import { IChatItem } from '../types/chat';

// utils
import { filterChats } from '../utils/filterChats';
import { getFirstItem } from '../utils/getFirstItem';
import { sortChatsByDate } from '../utils/sortChatsByDate';

export const useChatList = (
  filter: string,
): { data: IChatItem[]; refresh(): void; loading: boolean } => {
  const { data: chatsQuery, refetch, networkStatus } = useGetChatsQuery({
    notifyOnNetworkStatusChange: true,
  });

  const loading = NetworkStatus.ready === networkStatus ? false : true;

  useNewChatSubscription({
    onSubscriptionData: (subscriptionData) => {
      if (!subscriptionData.subscriptionData.data) {
        throw new Error('Invalid response');
      }

      subscriptionData.client.cache.modify({
        fields: {
          getChats() {},
        },
      });
    },
  });

  if (!chatsQuery || !chatsQuery.getChats) {
    return { data: [], refresh: () => {}, loading: false };
  }

  const chats: IChatItem[] = chatsQuery.getChats.map((el) => {
    if (!el) {
      return {} as any;
    }

    const lastMsgDate = getFirstItem(el.messages)?.createdAt;

    return {
      title: el.title,
      participants: el.participants,
      id: el.id,
      lastMsg: { date: lastMsgDate || el.createdAt },
      logo: el.logo || null,
      unreadCount:
        el.messages?.reduce((acc, msg) => {
          return msg?.readBy.find((user) => user.id === chatsQuery.getUser.id)
            ? acc
            : acc + 1;
        }, 0) || 0,
    };
  });

  const filteredChats = filterChats(chats, filter);

  return { data: sortChatsByDate(filteredChats), refresh: refetch, loading };
};
