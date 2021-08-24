import React, { FC, memo } from 'react';

// components
import UserListView from 'profile/components/UserList';

// hooks
import { useGetFilteredUsers } from '@/profile/hooks/useGetFilteredUsers';
import { useRefreshList } from 'profile/hooks/useRefreshList';

interface IUserListContainerProps {
  filter: string;
}

const UserListContainer: FC<IUserListContainerProps> = (props) => {
  const usersData = useGetFilteredUsers(props.filter);
  const [loading, refetch] = useRefreshList();

  return (
    <UserListView data={usersData} refreshing={loading} onRefresh={refetch} />
  );
};

export default memo(UserListContainer);
