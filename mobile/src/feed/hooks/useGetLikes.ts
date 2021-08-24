import {
  useGetPostByIdQuery,
  useGetUserQuery,
} from '@/common/types/gql.generated';

export const useGetLikes = (postId: string) => {
  const { data: post } = useGetPostByIdQuery({
    variables: { id: postId },
  });
  const { data: user } = useGetUserQuery();
  const likeCount = post?.getPost?.likes?.length || 0;
  const liked = post?.getPost?.likes?.find((el) => el.id === user?.getUser.id)
    ? true
    : false;
  return { likeCount, liked };
};
