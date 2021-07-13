import React, { FC, memo } from 'react';

// components
import MessageView from 'chat/chatScreen/components/Message';

// hooks
import { useOnMessagePressed } from 'chat/chatScreen/hooks/useOnMessagePressed';
import { useDirection } from 'chat/chatScreen/hooks/useDirection';

// constants
import { parseDate } from '../../utils/parseDate';

interface IMessageContainerProps {
  currentUserId: string;
  messageId: string;
  content: string;
  author: string;
  name: string;
  createdAt: string;
  isRead: boolean;
  lastEdit: string | null;
}

const MessageContainer: FC<IMessageContainerProps> = (props) => {
  const direction = useDirection(props.author, props.currentUserId);
  const onPress = useOnMessagePressed(props.messageId);
  const createdAt = parseDate(props.createdAt);
  const lastEdit = parseDate(props.lastEdit);

  if (!createdAt) {
    throw Error('msg loading error');
  }

  return (
    <MessageView
      onPress={onPress}
      content={props.content}
      direction={direction}
      author={props.name}
      createdAt={createdAt}
      isRead={props.isRead}
      lastEdit={lastEdit}
      id={props.messageId}
    />
  );
};

export default memo(MessageContainer);
