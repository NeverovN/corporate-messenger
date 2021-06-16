import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// containers
import UserImage from '@/profile/containers/UserImage';
import UserInfo from '@/profile/containers/UserInfo';

// hooks
import { useSetUserStyle } from 'chat/chatList/hooks/useSetUserStyle';
// styles
import styles from './styles';

interface IUserViewProps {
  userId: string;
  isSelected: boolean;
  onUserPressed(): void;
}

const UserView: FC<IUserViewProps> = (props) => {
  const style = useSetUserStyle(props.isSelected);
  return (
    <TouchableOpacity
      style={{ ...styles.userStyle, ...style }}
      onPress={props.onUserPressed}>
      <UserImage />
      <UserInfo userId={props.userId} />
    </TouchableOpacity>
  );
};

export default memo(UserView);
