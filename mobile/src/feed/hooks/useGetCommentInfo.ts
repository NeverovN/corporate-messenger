import {
  useGetCommentByIdQuery,
  useGetUserByIdQuery,
} from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';

export const useGetCommentInfo = (userId: string, commentId: string) => {
  const { data: user } = useGetUserByIdQuery({ variables: { id: userId } });
  const { data: commentResp } = useGetCommentByIdQuery({
    variables: { id: commentId },
  });

  const comment = {
    username: '',
    userAvatar: '',
    likeCount: 0,
  };

  comment.username = getUsername(
    user?.getUserById?.firstName,
    user?.getUserById?.lastName,
  );

  comment.userAvatar =
    'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg';

  comment.likeCount = commentResp?.getComment?.likes?.length || 0;

  return comment;
};
