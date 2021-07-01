import { useGetUserByIdQuery } from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';

export const useGetCommentInfo = (userId: string) => {
  const { data } = useGetUserByIdQuery({ variables: { id: userId } });

  const comment = {
    username: '',
    userAvatar: '',
  };

  comment.username = getUsername(
    data?.getUserById?.firstName,
    data?.getUserById?.lastName,
  );

  comment.userAvatar =
    'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg';

  return comment;
};
