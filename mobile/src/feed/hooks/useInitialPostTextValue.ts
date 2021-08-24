import { useGetPostByIdQuery } from '@/common/types/gql.generated';

export const useInitialPostTextValue = (postId: string) => {
  const { data } = useGetPostByIdQuery({ variables: { id: postId } });
  const initial = data?.getPost?.textContent ? data.getPost.textContent : null;
  return initial;
};
