import React, { FC, memo, useEffect, useState } from 'react';

// components
import UserView from 'profile/components/User';

// hooks
import { useOnUserPressed } from 'profile/hooks/useOnUserPressed';
import { resolveImagePromise } from '@/common/utils/resolveLogoPromise';

interface IUserContainerProps {
  userId: string;
  image: Promise<string | null> | string | null;
}

const UserContainer: FC<IUserContainerProps> = (props) => {
  const onPress = useOnUserPressed(props.userId);
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    resolveImagePromise(props.image, setAvatar);
  }, [props.image]);

  return (
    <UserView image={avatar} onUserPressed={onPress} userId={props.userId} />
  );
};

export default memo(UserContainer);
