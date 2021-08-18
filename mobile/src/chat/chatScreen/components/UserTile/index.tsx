import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import { useStyles } from './styles';

interface IUserTileViewProps {
  avatar: string | null;
  name: string;
}

const UserTileView: FC<IUserTileViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.itemStyle}>
      {props.avatar ? (
        <FastImage style={styles.imageStyle} source={{ uri: props.avatar }} />
      ) : (
        <FastImage
          style={styles.imageStyle}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
      <Text style={styles.nameStyle}>{props.name}</Text>
    </View>
  );
};

export default memo(UserTileView);
