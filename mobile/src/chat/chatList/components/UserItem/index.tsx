import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// containers
import UserImage from '@/profile/containers/UserImage';
import UserInfo from '@/profile/containers/UserInfo';

// hooks
import { useUserStyle } from '@/chat/chatList/hooks/useUserStyle';
// styles
import styles from './styles';

interface IUserViewProps {
  userId: string;
  onUserPressed(): void;
}

const UserView: FC<IUserViewProps> = (props) => {
  const style = useUserStyle(props.userId);
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
