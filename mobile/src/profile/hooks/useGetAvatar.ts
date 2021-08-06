import { MediaUploader } from '@/chat/chatScreen/utils/MediaUploader';
import { useGetUserQuery } from '@/common/types/gql.generated';

export const useGetAvatar = (id?: string) => {
  const { data } = useGetUserQuery({ variables: { id } });
  if (!data || !data.getUser) {
    return null;
  }

  const avatarId = data.getUser.avatar;
  const avatar = MediaUploader.getUserAvatarFromFirebase(avatarId || null);
  return avatar;
};
