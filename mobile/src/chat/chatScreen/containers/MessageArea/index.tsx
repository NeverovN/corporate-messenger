import React, { FC, memo } from 'react';

interface IMessageAreaContainerProps {}

// components
import MessageAreaView from 'chat/chatScreen/components/MessageArea';
import {
  useGetMessagesQuery,
  useNewMessageSubscription,
} from '@/common/types/gql.generated';

const MessageAreaContainer: FC<IMessageAreaContainerProps> = () => {
  const response = useGetMessagesQuery();
  useNewMessageSubscription({
    onSubscriptionData: (data) => {
      console.log(data);
    },
  }); // no response in code but normal response on playground
  const messages =
    !response.data || !response.data.getMessages
      ? []
      : response.data.getMessages;

  return <MessageAreaView data={messages ? null : messages} />;
};

export default memo(MessageAreaContainer);
