import { useMutateLikeMutation } from '@/common/types/gql.generated';

export const useOnLikePressed = (postId: string) => {
  const [mutateLike] = useMutateLikeMutation();
  return () => {
    mutateLike({ variables: { id: postId } });
  };
};
