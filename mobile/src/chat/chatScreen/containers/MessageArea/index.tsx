import React, { FC, memo } from 'react';

interface IMessageAreaContainerProps {}

// components
import MessageAreaView from 'chat/chatScreen/components/MessageArea';

// hooks
import { useGetChatMessages } from '../../hooks/useGetChatMessages';

import { useMarkReadMutation } from '@/common/types/gql.generated';

const MessageAreaContainer: FC<IMessageAreaContainerProps> = () => {
  const messages = useGetChatMessages();
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
