import { useGetPostByIdQuery } from '@/common/types/gql.generated';

export const useInitialMediaValue = (postId: string) => {
  const { data } = useGetPostByIdQuery({ variables: { id: postId } });
  const initial = data?.getPost?.mediaContent
    ? data.getPost.mediaContent
    : null;
  return initial;
};
