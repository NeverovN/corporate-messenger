import React, { FC, memo } from 'react';
import { useRoute } from '@react-navigation/native';

// components
import FriendButtonView from 'profile/components/FriendButton';

// hooks
import { useOnFriendButtonHandler } from 'profile/hooks/useOnFriendButtonPressHandler';

// types
import { ThirdPartyUserRouteProp } from 'profile/types/routes';

interface IFriendButtonContainerProps {}

const FriendButtonContainer: FC<IFriendButtonContainerProps> = () => {
  const { params } = useRoute<ThirdPartyUserRouteProp>();
  const handleFriendButton = useOnFriendButtonHandler(params.userId);

  return <FriendButtonView onPress={handleFriendButton} />;
};

export default memo(FriendButtonContainer);
