import React, { FC, memo } from 'react';

interface IMessageAreaContainerProps {
  setEditMessage(msg: IMessageItem | null): void;
}

// components
import MessageAreaView from 'chat/chatScreen/components/MessageArea';

// hooks
import { useGetChatMessages } from '../../hooks/useGetChatMessages';

import { useMarkReadMutation } from '@/common/types/gql.generated';
import { IMessageItem } from '../../types/message';

const MessageAreaContainer: FC<IMessageAreaContainerProps> = (props) => {
  const messages = useGetChatMessages(props.setEditMessage);
  const [edit] = useMarkReadMutation();
  return (
    <MessageAreaView
      data={messages}
      onViewed={[
        {
          viewabilityConfig: {
            minimumViewTime: 100,
            itemVisiblePercentThreshold: 1,
          },
          onViewableItemsChanged: (item) => {
            item.viewableItems.forEach((el) => {
              if (!el.item.read) {
                edit({ variables: { messageId: el.item.id } });
              }
            });
          },
        },
      ]}
    />
  );
};

export default memo(MessageAreaContainer);
