import React, { FC, memo } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

interface IUserImageViewProps {}

const UserImageView: FC<IUserImageViewProps> = () => {
  return (
    <View style={styles.userImageViewStyle}>
      <Image
        style={styles.userImageImageStyle}
        source={{
          uri:
            'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
        }}
      />
    </View>
  );
};

export default memo(UserImageView);
