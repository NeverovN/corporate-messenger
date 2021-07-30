import React, { FC, memo } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

interface IUserTileViewProps {
  username: string;
  email: string;
  avatar: string;
}

const UserTileView: FC<IUserTileViewProps> = (props) => {
  return (
    <View style={styles.userTileStyle}>
      <Image
        style={styles.userImageImageStyle}
        source={{
          uri: props.avatar,
        }}
      />
      <View style={styles.userInfoStyle}>
        <Text style={styles.userNameStyle}>{props.username}</Text>
        <Text style={styles.userEmailStyle}>{props.email}</Text>
      </View>
    </View>
  );
};

export default memo(UserTileView);
