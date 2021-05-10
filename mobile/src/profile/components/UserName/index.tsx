import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IUserImageViewProps {
  userName: string;
}

const UserImageView: FC<IUserImageViewProps> = (props) => {
  return (
    <View style={styles.userNameViewStyle}>
      <Text>{props.userName}</Text>
    </View>
  );
};

export default memo(UserImageView);
