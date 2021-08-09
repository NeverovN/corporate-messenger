import React, { FC, memo } from 'react';
import { View, Image, Text } from 'react-native';

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
        <Image style={styles.imageStyle} source={{ uri: props.avatar }} />
      ) : (
        <Image
          style={styles.imageStyle}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
      <Text style={styles.nameStyle}>{props.name}</Text>
    </View>
  );
};

export default memo(UserTileView);
