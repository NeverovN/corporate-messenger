import { useCreateChatMutation } from '@/common/types/gql.generated';

export const useHandleNewChat = () => {
  const [createChat] = useCreateChatMutation();
  return () => {
    createChat({ variables: { participants: [] } });
    console.log('new chat button pressed');
  };
};
