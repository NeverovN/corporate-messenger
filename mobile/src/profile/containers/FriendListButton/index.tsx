import React, { FC, memo } from 'react';

// components
import FriendListButtonView from '@/profile/components/FriendListButton';

// hooks
import { useHandleFriendListRedirection } from '@/profile/hooks/useHandleFriendListRedirection';

interface IFriendListButtonContainerProps {}

const FriendListButtonContainer: FC<IFriendListButtonContainerProps> = () => {
  const handleFriendListRedirection = useHandleFriendListRedirection();

  return <FriendListButtonView onPress={handleFriendListRedirection} />;
};

export default memo(FriendListButtonContainer);
