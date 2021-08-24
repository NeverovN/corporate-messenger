import React, { FC, memo } from 'react';

// components
import MainTileView from 'profile/components/MainTile';

// hooks
import { useGetAvatar } from '@/profile/hooks/useGetAvatar';

interface IMainTileContainerProps {}

const MainTileContainer: FC<IMainTileContainerProps> = () => {
  const avatar = useGetAvatar();
  return <MainTileView image={avatar} />;
};

export default memo(MainTileContainer);
