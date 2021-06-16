import React, { FC, memo } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

interface IUserTileViewProps {
  username: string;
  email: string;
}

const UserTileView: FC<IUserTileViewProps> = (props) => {
  return (
    <View style={styles.userTileStyle}>
      <Image
        style={styles.userImageImageStyle}
        source={{
          uri:
            'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
        }}
      />
      <View style={styles.userInfoStyle}>
        <Text>{props.username}</Text>
        <Text>{props.email}</Text>
      </View>
    </View>
  );
};

export default memo(UserTileView);
