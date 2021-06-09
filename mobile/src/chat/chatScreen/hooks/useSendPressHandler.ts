import React from 'react';
import {
  useCreateMessageMutation,
  MessageFragmentFragmentDoc,
} from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from '@/chat/chatList/types/routes';

export const useSendPressHandler = (
  message: string,
  resetTextArea: React.Dispatch<React.SetStateAction<string>>,
) => {
  const { params } = useRoute<ChatRouteProp>();
  const [createMsg] = useCreateMessageMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getChatById() {
            cache.writeFragment({
              fragment: MessageFragmentFragmentDoc,
              data: data.createMessage,
            });
          },
        },
      });
    },
  });
  if (!message) {
    return () => {};
  }
  return async () => {
    try {
      await createMsg({
        variables: {
          content: message,
          chatId: params.chatId,
        },
      });

      resetTextArea('');
    } catch (err) {
      console.log(err);
    }
  };
};
