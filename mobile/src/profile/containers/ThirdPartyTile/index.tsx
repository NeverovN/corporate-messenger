import React, { FC, memo } from 'react';
import { useRoute } from '@react-navigation/core';

// component
import ThirdPartyTileView from '@/profile/components/ThirdPartyTile';

// hooks
import { useGetAvatar } from '@/profile/hooks/useGetAvatar';

// types
import { ThirdPartyUserRouteProp } from 'profile/types/routes';

interface IThirdPartyTileContainerProps {}

const ThirdPartyTileContainer: FC<IThirdPartyTileContainerProps> = () => {
  const { params } = useRoute<ThirdPartyUserRouteProp>();
  const avatar = useGetAvatar(params.userId);
  return <ThirdPartyTileView image={avatar} />;
};

export default memo(ThirdPartyTileContainer);
