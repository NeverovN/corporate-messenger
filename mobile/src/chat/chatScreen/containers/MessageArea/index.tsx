import React, { FC, memo } from 'react';

interface IMessageAreaContainerProps {}

// components
import MessageAreaView from 'chat/chatScreen/components/MessageArea';
import { useNewMessageSubscription } from 'common/types/gql.generated';

// hooks
import { useGetChatMessages } from '../../hooks/useGetChatMessages';

const MessageAreaContainer: FC<IMessageAreaContainerProps> = () => {
  const messages = useGetChatMessages();
  useNewMessageSubscription({
    onSubscriptionData: (data) => {
      console.log(data);
    },
  }); // no response in code but normal response on playground

  return <MessageAreaView data={messages} />;
};

export default memo(MessageAreaContainer);
