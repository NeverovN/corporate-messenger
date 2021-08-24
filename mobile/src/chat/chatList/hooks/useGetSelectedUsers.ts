import { selectedFriendsVar } from '@/common/cache/cache';
import {
  useGetUserQuery,
  useGetUsersQuery,
} from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';

export const useGetSelectedUsers = (): {
  name: string;
  avatar: string | null;
}[] => {
  const otherUsers = selectedFriendsVar();
  const { data: me } = useGetUserQuery();
  const { data: others } = useGetUsersQuery({ variables: { ids: otherUsers } });

  if (!others || !others.getUsers) {
    return [];
  }

  const result: {
    name: string;
    avatar: string | null;
  }[] = [];

  others.getUsers.forEach((el) => {
    if (!el) {
      return;
    }
    const name = getUsername(el.firstName || '', el.lastName || '');
    result.push({ name, avatar: el.avatar || null });
  });

  if (!me || !me.getUser) {
    return result;
  }

  const name = getUsername(
    me.getUser.firstName || '',
    me.getUser.lastName || '',
  );

  result.unshift({ name, avatar: me.getUser.avatar || null });

  return result;
};
