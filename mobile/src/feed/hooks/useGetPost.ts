import { useGetPostByIdQuery } from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';

export const useGetPost = (id: string) => {
  const { data } = useGetPostByIdQuery({ variables: { id } });

  const username = getUsername(
    data?.getPost?.author.firstName || '',
    data?.getPost?.author.lastName || '',
  );

  const mediaContent = data?.getPost?.mediaContent?.length
    ? data?.getPost?.mediaContent
    : null;

  return {
    author: {
      id: data?.getPost?.author.id || '',
      name: username,
    },
    createdAt: data?.getPost?.createdAt || '',
    textContent: data?.getPost?.textContent || null,
    mediaContent: mediaContent,
    id: data?.getPost?.id || '',
    avatar: data?.getPost?.author.avatar || null,
    likes: data?.getPost?.likes?.length || 0,
  };
};
