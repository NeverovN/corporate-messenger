import { FC } from 'react';

// containers
import ChatItem from 'chat/containers/ChatItem';

export const useChatList = () => {
  const array: FC[] = new Array(10).fill(ChatItem);
  const result: ReadonlyArray<any> = array.map((el, index) => {
    return {
      data: el,
      id: index,
    };
  });
  return result;
};
