import React from 'react';
import { useCreateMessageMutation } from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from '@/chat/chatList/types/routes';

export const useSendPressHandler = (
  message: string,
  resetTextArea: React.Dispatch<React.SetStateAction<string>>,
) => {
  const { params } = useRoute<ChatRouteProp>();
  const [createMsg] = useCreateMessageMutation();
  if (!message) {
    return () => {};
  }
  return () => {
    try {
      createMsg({
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
