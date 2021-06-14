import React, { FC, memo } from 'react';
import ContextMenu from 'react-native-context-menu-view';

// components
import MessageView from 'chat/chatScreen/components/Message';

// hooks
import { useOnMessagePressed } from 'chat/chatScreen/hooks/useOnMessagePressed';
import { useHandleMessageActions } from 'chat/chatScreen/hooks/useHandleMessageActions';
import { useDirection } from 'chat/chatScreen/hooks/useDirection';
import { useGetCurrentUserId } from '@/common/hooks/useGetCurrentUserId';

// constants
import ACTIONS from 'chat/chatScreen/constants/actions';
import { useMessageEditedSubscription } from '@/common/types/gql.generated';
import { useParseDate } from '../../hooks/useParseDate';

interface IMessageContainerProps {
  messageId: string;
  content: string;
  author: string;
  name: string;
  createdAt: string;
  lastEdit: string | null;
}

const MessageContainer: FC<IMessageContainerProps> = (props) => {
  const currentUserId = useGetCurrentUserId();
  const direction = useDirection(props.author, currentUserId);
  const onPress = useOnMessagePressed(props.messageId);
  const actionHandler = useHandleMessageActions();
  const createdAt = useParseDate(props.createdAt);
  const lastEdit = useParseDate(props.lastEdit);

  useMessageEditedSubscription({
    variables: { messageId: props.messageId },
  });

  if (!createdAt) {
    throw Error('msg loading error');
  }

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
        author={props.name}
        createdAt={createdAt}
        lastEdit={lastEdit}
      />
    </ContextMenu>
  );
};

export default memo(MessageContainer);
