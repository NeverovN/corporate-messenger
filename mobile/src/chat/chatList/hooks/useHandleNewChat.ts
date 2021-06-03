import { useCreateChatMutation } from '@/common/types/gql.generated';

export const useHandleNewChat = () => {
  const [CreateChat] = useCreateChatMutation();
  return () => {
    CreateChat();
    console.log('new chat button pressed');
  };
};
