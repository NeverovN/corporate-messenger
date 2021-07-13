import { useGetCommentByIdQuery } from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';
import { ICommentItem } from '../types/comment';

export const useGetComment = (
  commentId: string,
): [ICommentItem & { likes: number }, boolean] => {
  const { data } = useGetCommentByIdQuery({
    variables: { id: commentId },
  });

  const username = getUsername(
    data?.getComment?.author.firstName || '',
    data?.getComment?.author.lastName || '',
  );

  const liked = data?.getComment?.likes?.find((el) => el.id === data.getUser.id)
    ? true
    : false;

  return [
    {
      author: {
        id: data?.getComment?.author.id || '',
        name: username,
        avatar:
          data?.getComment?.author.avatar ||
          'https://cdn3.vectorstock.com/i/1000x1000/26/97/continuous-one-line-drawing-circle-minimalism-art-vector-25552697.jpg',
      },
      createdAt: data?.getComment?.createdAt || '',
      content: data?.getComment?.content || null,
      id: data?.getComment?.id || '',
      likes: data?.getComment?.likes?.length || 0,
    },
    liked,
  ];
};
