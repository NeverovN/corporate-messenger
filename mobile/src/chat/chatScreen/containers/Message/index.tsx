import React, { FC, memo } from 'react';

import MessageView from 'chat/chatScreen/components/Message';

// hooks
import { useOnMessagePressed } from 'chat/chatScreen/hooks/useOnMessagePressed';

interface IMessageContainerProps {
  messageId: string;
  content: string;
}

const MessageContainer: FC<IMessageContainerProps> = (props) => {
  const onPress = useOnMessagePressed(props.messageId);
  return <MessageView onPress={onPress} content={props.content} />;
};

export default memo(MessageContainer);
