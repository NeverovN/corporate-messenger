import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// containers
import UserImage from '@/profile/containers/UserImage';
import UserInfo from '@/profile/containers/UserInfo';

// styles
import { useStyles } from './styles';

interface IUserViewProps {
  userId: string;
  image: string | null;
  onUserPressed(): void;
}

const UserView: FC<IUserViewProps> = (props) => {
  const styles = useStyles();
  return (
    <TouchableOpacity style={styles.userStyle} onPress={props.onUserPressed}>
      <UserImage size={60} image={props.image} />
      <UserInfo userId={props.userId} />
    </TouchableOpacity>
  );
};

export default memo(UserView);
