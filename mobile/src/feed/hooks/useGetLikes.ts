import { useGetPostByIdQuery } from '@/common/types/gql.generated';

export const useGetLikes = (postId: string) => {
  const { data } = useGetPostByIdQuery({ variables: { id: postId } });
  return data?.getPost?.likes?.length || 0;
};
