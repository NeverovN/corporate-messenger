import { FC } from 'react';

// containers
import ChatItem from 'chat/components/ChatItem';

// types
import { IChatItem } from 'chat/types/chat';
import { SharedStackNavigationProp } from '@/app/types/routes';

// consts
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';

export const useChatList = (navigation: SharedStackNavigationProp) => {
  const array: FC[] = new Array(10).fill(ChatItem);
  const result: Array<IChatItem> = array.map((el, ind) => {
    return {
      guid: 'guid test',
      title: 'chat title',
      users: [],
      id: ind,
      data: el,
      onPress: () => {
        navigation.navigate(SHARED_STACK_NAME, { screen: CHAT_STACK_NAME });
      },
    };
  });
  return result;
};
