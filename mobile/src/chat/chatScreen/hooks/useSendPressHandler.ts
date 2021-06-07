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
          chatId: chatId || '60be5d86b0907529c079dac8',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
