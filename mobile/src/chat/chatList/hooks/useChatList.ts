// types
import { SharedStackNavigationProp } from '@/app/types/routes';

// consts
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';
import {
  useGetChatsQuery,
  useNewChatSubscription,
} from 'common/types/gql.generated';

export const useChatList = (navigation: SharedStackNavigationProp) => {
  const { data: queryData } = useGetChatsQuery();
  const { data: subData } = useNewChatSubscription();

  if (!queryData || !queryData.getChats) {
    return [] as any;
  }

  const chats = queryData.getChats.map((el) => {
    if (!el) {
      return [] as any;
    }
    return {
      data: el,
      title: el.id,
      participants: el.participants,
      id: el.id,
      onPress: () => {
        navigation.push(SHARED_STACK_NAME, {
          screen: CHAT_STACK_NAME,
          params: { chatId: el.id },
        });
      },
    };
  });

  if (subData && subData.newChat) {
    const mappedNewChat = {
      data: subData.newChat,
      title: subData.newChat.id,
      participants: subData.newChat.participants,
      id: subData.newChat.id,
      onPress: () => {
        navigation.push(SHARED_STACK_NAME, {
          screen: CHAT_STACK_NAME,
          params: { chatId: subData.newChat.id },
        });
      },
    };
    chats.push(mappedNewChat);
  }

  chats.forEach((el) => console.log(el.id));

  return chats;
};
