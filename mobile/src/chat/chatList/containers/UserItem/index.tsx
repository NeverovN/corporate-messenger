import React, { FC, memo, useState } from 'react';

// components
import UserItemView from 'chat/chatList/components/UserItem';

// hooks
import { useHandleFriendSelection } from 'chat/chatList/hooks/useHandleFriendSelection';

interface IUserItemContainerProps {
  userId: string;
  image: string | null;
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
      image={props.image}
      onUserPressed={handlePress}
      userId={props.userId}
    />
  );
};

export default memo(UserItemContainer);
