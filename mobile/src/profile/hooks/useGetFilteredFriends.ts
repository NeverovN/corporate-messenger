import { MediaUploader } from '@/chat/chatScreen/utils/MediaUploader';
import { useGetUserQuery } from '@/common/types/gql.generated';

// utils
import { filterUsers } from 'profile/utils/filterUsers';

export const useGetFilteredFriends = (filter: string) => {
  const { data: currUser } = useGetUserQuery();

  if (!currUser || !currUser.getUser) {
    throw Error('unauthorized user');
  }

  const friends = currUser.getUser.friends.map((el) => {
    if (!el) {
      return;
    }

    const avatar = MediaUploader.getUserAvatarFromFirebase(el.avatar || null);

    return {
      id: el.id,
      firstName: el.firstName,
      lastName: el.lastName,
      avatar,
    };
  });

  const filteredUsers = filterUsers(friends, filter);

  return filteredUsers;
};
