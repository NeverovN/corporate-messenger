import React, { FC, memo } from 'react';

// components
import FriendListView from 'profile/components/FriendList';

// hooks
import { useGetFilteredFriends } from '@/profile/hooks/useGetFilteredFriends';

interface IFriendListContainerProps {
  filter: string;
}

const FriendListContainer: FC<IFriendListContainerProps> = (props) => {
  const { filteredUsers, refresh, loading } = useGetFilteredFriends(
    props.filter,
  );

  return (
    <FriendListView data={filteredUsers} loading={loading} refresh={refresh} />
  );
};

export default memo(FriendListContainer);
