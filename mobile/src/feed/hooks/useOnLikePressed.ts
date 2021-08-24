import { useToggleLikeMutation } from '@/common/types/gql.generated';

export const useOnLikePressed = (postId: string) => {
  const [toggleLike] = useToggleLikeMutation();
  return () => {
    toggleLike({ variables: { id: postId } });
  };
};
