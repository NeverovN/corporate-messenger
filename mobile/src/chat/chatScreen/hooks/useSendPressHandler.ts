import { useCreateMessageMutation } from '@/common/types/gql.generated';

export const useSendPressHandler = (message: string) => {
  const [createMsg] = useCreateMessageMutation();
  return () => {
    createMsg({
      variables: {
        content: message,
      },
    });
  };
};
