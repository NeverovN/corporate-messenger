import React, { FC, memo, useEffect, useState } from 'react';
import ContextMenu from 'react-native-context-menu-view';

import ChatItemView from 'chat/chatList/components/ChatItem';

// hooks
import { useOnChatPressed } from '../../hooks/useOnChatPressed';
import { useHandleChatActions } from '../../hooks/useHandleChatActions';
import { useMessageEditedSubscription } from '@/common/types/gql.generated';

// consts
import ACTIONS from 'chat/chatList/constants/actions';

// utils
import { resolveImagePromise } from '../../../../common/utils/resolveLogoPromise';

interface IChatItemContainerProps {
  chatId: string;
  unreadCount: number;
  logo: string | Promise<string | null> | null;
}

const ChatItemContainer: FC<IChatItemContainerProps> = (props) => {
  const [logo, setLogo] = useState<string | null>(null);
  const redirect = useOnChatPressed(props.chatId);
  useMessageEditedSubscription({ variables: { chatId: props.chatId } });
  const actionHandler = useHandleChatActions();

  useEffect(() => {
    resolveImagePromise(props.logo, setLogo);
  }, [props.logo]);

  return (
    <ContextMenu
      title={'Chat Actions'}
      actions={[
        { title: 'Disable notifications' },
        { title: ACTIONS.DELETE, destructive: true },
      ]}
      onPress={(e) => actionHandler(e.nativeEvent.name, props.chatId)}>
      <ChatItemView
        logo={logo}
        onPress={redirect}
        chatId={props.chatId}
        count={props.unreadCount}
      />
    </ContextMenu>
  );
};

export default memo(ChatItemContainer);
