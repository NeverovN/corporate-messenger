import React, { FC, memo } from 'react';
import ContextMenu from 'react-native-context-menu-view';

import MessageView from 'chat/chatScreen/components/Message';

// hooks
import { useOnMessagePressed } from 'chat/chatScreen/hooks/useOnMessagePressed';
import { useHandleMessageActions } from 'chat/chatScreen/hooks/useHandleMessageActions';
import { useDirection } from 'chat/chatScreen/hooks/useDirection';
import { useGetCurrentUserId } from '@/common/hooks/useGetCurrentUserId';

// constants
import ACTIONS from 'chat/chatScreen/constants/actions';
import { useMessageEditedSubscription } from '@/common/types/gql.generated';

interface IMessageContainerProps {
  messageId: string;
  content: string;
  author: string;
}

const MessageContainer: FC<IMessageContainerProps> = (props) => {
  const currentUserId = useGetCurrentUserId();
  const direction = useDirection(props.author, currentUserId);
  const onPress = useOnMessagePressed(props.messageId);
  const actionHandler = useHandleMessageActions();

  useMessageEditedSubscription({
    variables: { messageId: props.messageId },
  });

  return (
    <ContextMenu
      title={'Chat Actions'}
      actions={[
        { title: ACTIONS.EDIT },
        { title: ACTIONS.DELETE, destructive: true },
      ]}
      onPress={(e) => actionHandler(e.nativeEvent.name, props.messageId)}>
      <MessageView
        onPress={onPress}
        content={props.content}
        direction={direction}
      />
    </ContextMenu>
  );
};

export default memo(MessageContainer);
