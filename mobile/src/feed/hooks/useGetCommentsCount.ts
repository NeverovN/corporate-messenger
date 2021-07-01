import { useGetPostByIdQuery } from '@/common/types/gql.generated';

export const useGetCommentsCount = (postId: string) => {
  const { data } = useGetPostByIdQuery({ variables: { id: postId } });

  if (!data || !data.getPost) {
    return 0;
  }

  return data.getPost.comments?.length;
};
