import React, { FC, memo } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

interface IUserTileViewProps {
  username: string;
  email: string;
  avatar: string | null;
}

const UserTileView: FC<IUserTileViewProps> = (props) => {
  return (
    <View style={styles.userTileStyle}>
      {props.avatar ? (
        <Image
          style={styles.userImageImageStyle}
          source={{
            uri: props.avatar,
          }}
        />
      ) : (
        <Image
          style={styles.userImageImageStyle}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
      <View style={styles.userInfoStyle}>
        <Text style={styles.userNameStyle}>{props.username}</Text>
        <Text style={styles.userEmailStyle}>{props.email}</Text>
      </View>
    </View>
  );
};

export default memo(UserTileView);
