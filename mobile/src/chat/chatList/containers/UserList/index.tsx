import React, { FC, memo } from 'react';

// components
import UserListView from 'chat/chatList/components/UserList';

// hooks
import { useGetUserFriends } from 'chat/chatList/hooks/useGetUserFriends';

interface IUserListContainerProps {}

const UserListContainer: FC<IUserListContainerProps> = () => {
  const friends = useGetUserFriends();
  return <UserListView data={friends} />;
};

export default memo(UserListContainer);
