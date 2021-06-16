import React, { FC, memo, useState } from 'react';

// components
import UserItemView from 'chat/chatList/components/UserItem';

// hooks
import { useHandleFriendSelection } from 'chat/chatList/hooks/useHandleFriendSelection';

interface IUserItemContainerProps {
  userId: string;
}

const UserItemContainer: FC<IUserItemContainerProps> = (props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const handlePress = useHandleFriendSelection(
    isSelected,
    setIsSelected,
    props.userId,
  );

  return (
    <UserItemView
      onUserPressed={handlePress}
      isSelected={isSelected}
      userId={props.userId}
    />
  );
};

export default memo(UserItemContainer);
