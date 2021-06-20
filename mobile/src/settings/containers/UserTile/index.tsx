import React, { FC, memo } from 'react';

// components
import UserTileView from '@/settings/components/UserTile';

// hooks
import { useGetUsersData } from '@/settings/hooks/useGetUsersData';
import { getUserName } from '@/settings/utils/getUserName';

interface IUserTileContainerProps {}

const UserTileContainer: FC<IUserTileContainerProps> = () => {
  const { firstName, lastName, email, avatar } = useGetUsersData();
  const username = getUserName(firstName, lastName);
  return <UserTileView username={username} email={email} avatar={avatar} />;
};

export default memo(UserTileContainer);
