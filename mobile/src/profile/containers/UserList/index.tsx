import React, { FC, memo } from 'react';

// components
import UserListView from 'profile/components/UserList';

// hooks
import { useGetFilteredUsers } from '@/profile/hooks/useGetFilteredUsers';

interface IUserListContainerProps {
  filter: string;
}

const UserListContainer: FC<IUserListContainerProps> = (props) => {
  const usersData = useGetFilteredUsers(props.filter);

  return <UserListView data={usersData} />;
};

export default memo(UserListContainer);
