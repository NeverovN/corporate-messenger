import React, { FC, memo } from 'react';

// components
import FriendListView from 'profile/components/FriendList';

// hooks
import { useGetFilteredFriends } from '@/profile/hooks/useGetFilteredFriends';

interface IFriendListContainerProps {
  filter: string;
}

const FriendListContainer: FC<IFriendListContainerProps> = (props) => {
  const usersData = useGetFilteredFriends(props.filter);

  return <FriendListView data={usersData} />;
};

export default memo(FriendListContainer);
