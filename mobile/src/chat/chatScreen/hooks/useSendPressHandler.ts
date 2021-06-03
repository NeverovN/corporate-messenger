import { useCreateMessageMutation } from '@/common/types/gql.generated';

export const useSendPressHandler = (message: string, chatId: string) => {
  const [createMsg] = useCreateMessageMutation();
  if (!message) {
    return () => {};
  }
  return () => {
    createMsg({
      variables: {
        content: message,
        chatId,
      },
    });
  };
};
