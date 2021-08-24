import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import { useStyles } from './styles';

interface IUserTileViewProps {
  username: string;
  email: string;
  avatar: string | null;
}

const UserTileView: FC<IUserTileViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.userTileStyle}>
      {props.avatar ? (
        <FastImage
          style={styles.userImageImageStyle}
          source={{
            uri: props.avatar,
          }}
        />
      ) : (
        <FastImage
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
