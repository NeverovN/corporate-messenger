import { useToggleLikeMutation } from '@/common/types/gql.generated';

import analytics from '@react-native-firebase/analytics';

export const useOnLikePressed = (postId: string) => {
  const [toggleLike] = useToggleLikeMutation();
  return () => {
    toggleLike({ variables: { id: postId } });
    analytics().logEvent('like_pressed');
  };
};
