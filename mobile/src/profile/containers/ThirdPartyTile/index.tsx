import React, { FC, memo, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/core';

// component
import ThirdPartyTileView from '@/profile/components/ThirdPartyTile';

// utils
import { resolveImagePromise } from '@/common/utils/resolveLogoPromise';

// hooks
import { useGetAvatar } from '@/profile/hooks/useGetAvatar';

// types
import { ThirdPartyUserRouteProp } from 'profile/types/routes';

interface IThirdPartyTileContainerProps {}

const ThirdPartyTileContainer: FC<IThirdPartyTileContainerProps> = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const { params } = useRoute<ThirdPartyUserRouteProp>();
  const avatarPromise = useGetAvatar(params.userId);
  useEffect(() => {
    resolveImagePromise(avatarPromise, setAvatar);
  }, [avatarPromise]);
  return <ThirdPartyTileView image={avatar} />;
};

export default memo(ThirdPartyTileContainer);
