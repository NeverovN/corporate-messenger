import React, { FC, memo, useEffect } from 'react';

interface IMessageAreaContainerProps {}

// components
import MessageAreaView from 'chat/chatScreen/components/MessageArea';
import {
  useGetMessagesQuery,
  useNewMessageSubscription,
} from '@/common/types/gql.generated';

const MessageAreaContainer: FC<IMessageAreaContainerProps> = () => {
  const response = useGetMessagesQuery();
  const { data } = useNewMessageSubscription(); // no response in code but normal response on playground
  console.log('data?.newMessage: ', data);
  const messages =
    !response.data || !response.data.getMessages
      ? []
      : response.data.getMessages;

  useEffect(() => {
    if (data && data.newMessage) {
      messages.push(data?.newMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <MessageAreaView data={messages ? null : messages} />;
};

export default memo(MessageAreaContainer);
