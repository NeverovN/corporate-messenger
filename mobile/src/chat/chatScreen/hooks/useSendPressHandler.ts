import { useCreateMessageMutation } from '@/common/types/gql.generated';

export const useSendPressHandler = (message: string, chatId: string) => {
  const [createMsg] = useCreateMessageMutation();
  if (!message) {
    return () => {};
  }
  return () => {
    try {
      createMsg({
        variables: {
          content: message,
          chatId: chatId || '60beb93c5d874c5137d7bba0',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
