import React, { FC, memo } from 'react';

// components
import UserTileView from '@/settings/components/UserTile';

// hooks
import { useGetUsersData } from '@/settings/hooks/useGetUsersData';
import { setUserName } from '@/settings/utils/setUserName';

interface IUserTileContainerProps {}

const UserTileContainer: FC<IUserTileContainerProps> = () => {
  const { firstName, lastName, email } = useGetUsersData();
  const username = setUserName(firstName, lastName);
  return <UserTileView username={username} email={email} />;
};

export default memo(UserTileContainer);
