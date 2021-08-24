import { useGetCommentByIdQuery } from '@/common/types/gql.generated';

export const useInitialCommentTextValue = (commentId: string) => {
  const { data } = useGetCommentByIdQuery({ variables: { id: commentId } });
  const initial = data?.getComment?.content ? data.getComment.content : null;
  return initial;
};
