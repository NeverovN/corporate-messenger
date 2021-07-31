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

  const liked = data?.getComment?.likes?.find((el) => {
    console.log(el.__typename);
    return el.id === data.getUser.id;
  })
    ? true
    : false;

  return [
    {
      author: {
        id: data?.getComment?.author.id || '',
        name: username,
        avatar: data?.getComment?.author.avatar || null,
      },
      createdAt: data?.getComment?.createdAt || '',
      content: data?.getComment?.content || null,
      id: data?.getComment?.id || '',
      likes: data?.getComment?.likes?.length || 0,
    },
    liked,
  ];
};
