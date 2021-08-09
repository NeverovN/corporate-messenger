import React, { FC, memo, useEffect, useState } from 'react';

// components
import MainTileView from 'profile/components/MainTile';

// hooks
import { useGetAvatar } from '@/profile/hooks/useGetAvatar';
import { resolveImagePromise } from '@/common/utils/resolveLogoPromise';

interface IMainTileContainerProps {}

const MainTileContainer: FC<IMainTileContainerProps> = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const avatarPromise = useGetAvatar();

  useEffect(() => {
    resolveImagePromise(avatarPromise, setAvatar);
  }, [avatarPromise]);

  return <MainTileView image={avatar} />;
};

export default memo(MainTileContainer);
