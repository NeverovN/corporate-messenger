import React, { FC, memo } from 'react';

import NewChatScreenView from 'chat/chatList/components/NewChatScreen';

interface INewChatScreenContainerProps {}

const NewChatScreenContainer: FC<INewChatScreenContainerProps> = () => {
  return <NewChatScreenView search={() => console.log('search pressed')} />;
};

export default memo(NewChatScreenContainer);
