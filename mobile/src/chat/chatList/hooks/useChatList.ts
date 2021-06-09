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
  useNewChatSubscription();

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
        navigation.navigate(SHARED_STACK_NAME, {
          screen: CHAT_STACK_NAME,
          params: { screen: 'Chat', params: { chatId: el.id } },
        });
      },
    };
  });

  return chats;
};
