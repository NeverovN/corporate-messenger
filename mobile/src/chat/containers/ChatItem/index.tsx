import React, { FC, memo } from 'react';

// components
import ChatItemView from 'chat/components/ChatItem';

// hooks
import { useChatSelection } from 'chat/hooks/useChatSelection';

interface ICHatItemContainerProps {}

const ChatItemContainer: FC<ICHatItemContainerProps> = () => {
  const onChatPress = useChatSelection({});

  return <ChatItemView onPress={onChatPress} />;
};

export default memo(ChatItemContainer);
