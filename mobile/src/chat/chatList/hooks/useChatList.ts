import { MediaUploader } from '@/chat/chatScreen/utils/MediaUploader';
import {
  ChatFragmentFragmentDoc,
  useGetChatsQuery,
  useNewChatSubscription,
} from 'common/types/gql.generated';

// types
import { IChatItem } from '../types/chat';

// utils
import { filterChats } from '../utils/filterChats';
import { getFirstItem } from '../utils/getFirstItem';
import { sortChatsByDate } from '../utils/sortChatsByDate';

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
                data: subscriptionData.subscriptionData.data?.newChat,
                id: subscriptionData.subscriptionData.data?.newChat.id,
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
      return {} as any;
    }

    const lastMsgDate = getFirstItem(el.messages)?.createdAt;
    const logo = MediaUploader.getChatLogoFromFirebase(el.logo || null);
    return {
      title: el.title,
      participants: el.participants,
      id: el.id,
      lastMsg: { date: lastMsgDate || el.createdAt },
      logo,
      unreadCount:
        el.messages?.reduce((acc, msg) => {
          return msg?.readBy.find((user) => user.id === data.getUser.id)
            ? acc
            : acc + 1;
        }, 0) || 0,
    };
  });

  const filteredChats = filterChats(chats, filter);

  return sortChatsByDate(filteredChats);
};
