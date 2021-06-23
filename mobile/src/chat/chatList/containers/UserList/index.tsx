import React, { FC, memo } from 'react';

// components
import UserListView from 'chat/chatList/components/UserList';

// hooks
import { useGetUserFriends } from 'chat/chatList/hooks/useGetUserFriends';

interface IUserListContainerProps {
  filter: string;
}

const UserListContainer: FC<IUserListContainerProps> = (props) => {
  const friends = useGetUserFriends(props.filter);
  return <UserListView data={friends} />;
};

export default memo(UserListContainer);
