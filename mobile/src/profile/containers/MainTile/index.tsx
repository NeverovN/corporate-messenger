import React, { FC, memo } from 'react';

// components
import MainTileView from 'profile/components/MainTile';

interface IMainTileContainerProps {}

const MainTileContainer: FC<IMainTileContainerProps> = () => {
  return <MainTileView />;
};

export default memo(MainTileContainer);
