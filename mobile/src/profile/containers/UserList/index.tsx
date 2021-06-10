import React, { FC, memo } from 'react';

// components
import UserListView from 'profile/components/UserList';

// hooks
import { useGetAllUsers } from 'profile/hooks/useGetAllUsers';

interface IUserListContainerProps {}

const UserListContainer: FC<IUserListContainerProps> = () => {
  const usersData = useGetAllUsers();

  return <UserListView data={usersData} />;
};

export default memo(UserListContainer);
