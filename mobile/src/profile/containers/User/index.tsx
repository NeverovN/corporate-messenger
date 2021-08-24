import React, { FC, memo, useEffect, useState } from 'react';

// components
import UserView from 'profile/components/User';

// hooks
import { useOnUserPressed } from 'profile/hooks/useOnUserPressed';

interface IUserContainerProps {
  userId: string;
  image: string | null;
}

const UserContainer: FC<IUserContainerProps> = (props) => {
  const onPress = useOnUserPressed(props.userId);

  return (
    <UserView
      image={props.image}
      onUserPressed={onPress}
      userId={props.userId}
    />
  );
};

export default memo(UserContainer);
