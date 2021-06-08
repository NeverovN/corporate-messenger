import React, { FC, memo } from 'react';

// components
import MessageView from '../../components/Message';

interface IMessageContainerProps {}

const MessageContainer: FC<IMessageContainerProps> = () => {
  return <MessageView />;
};

export default memo(MessageContainer);
