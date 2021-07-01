import { useLikeCommentMutation } from '@/common/types/gql.generated';

export const useLikeComment = (commentId: string) => {
  const [mutateLike] = useLikeCommentMutation();
  return () => {
    mutateLike({ variables: { commentId } });
  };
};
