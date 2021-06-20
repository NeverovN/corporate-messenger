import React, { FC, memo } from 'react';

// components
import UserTileView from '@/settings/components/UserTile';

// hooks
import { useGetCurrentUser } from '@/settings/hooks/useGetUsersData';
import { getUserName } from '@/settings/utils/getUserName';

interface IUserTileContainerProps {}

const UserTileContainer: FC<IUserTileContainerProps> = () => {
  const { firstName, lastName, email, avatar } = useGetCurrentUser();
  const username = getUserName(firstName, lastName);

  return <UserTileView username={username} email={email} avatar={avatar} />;
};

export default memo(UserTileContainer);
