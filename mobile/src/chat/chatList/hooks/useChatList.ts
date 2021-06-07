// types
import { SharedStackNavigationProp } from '@/app/types/routes';

// consts
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';
import { useGetChatsQuery } from '@/common/types/gql.generated';

export const useChatList = (navigation: SharedStackNavigationProp) => {
  const { data } = useGetChatsQuery();

  if (!data || !data.getChats) {
    return [] as any;
  }

  return data.getChats.map((el) => {
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
};
