import { useRoute } from '@react-navigation/native';

// types
import { PostScreenRouteProp } from 'feed/types/routes';

export const useGetComments = () => {
  const { params } = useRoute<PostScreenRouteProp>();

  return [];
};
