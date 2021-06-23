import React, { FC, memo } from 'react';

// components
import UserView from 'profile/components/User';

// hooks
import { useOnUserPressed } from 'profile/hooks/useOnUserPressed';

interface IUserContainerProps {
  userId: string;
  username: string;
}

const UserContainer: FC<IUserContainerProps> = (props) => {
  const onPress = useOnUserPressed(props.userId, props.username);
  return <UserView onUserPressed={onPress} userId={props.userId} />;
};

export default memo(UserContainer);
