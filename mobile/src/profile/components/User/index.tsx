import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// containers
import UserImage from '@/profile/containers/UserImage';
import UserInfo from '@/profile/containers/UserInfo';

// styles
import styles from './styles';

interface IUserViewProps {
  userId: string;
  onUserPressed(): void;
}

const UserView: FC<IUserViewProps> = (props) => {
  return (
    <TouchableOpacity style={styles.userStyle} onPress={props.onUserPressed}>
      <UserImage />
      <UserInfo userId={props.userId} />
    </TouchableOpacity>
  );
};

export default memo(UserView);
