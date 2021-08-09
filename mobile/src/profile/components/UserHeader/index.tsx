import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { useStyles } from './styles';

// containers
import UserImage from 'profile/containers/UserImage';
import UserHeaderInfo from 'profile/containers/UserHeaderInfo';

interface IUserHeaderViewProps {
  image: string | null;
}

const UserHeaderView: FC<IUserHeaderViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.userMainInfoStyle}>
      <UserImage size={70} image={props.image} />
      <UserHeaderInfo />
    </View>
  );
};

export default memo(UserHeaderView);
