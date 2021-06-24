import React, { FC, memo } from 'react';
import FastImage from 'react-native-fast-image';

import styles from './styles';

interface IUserImageViewProps {}

const UserImageView: FC<IUserImageViewProps> = () => {
  return (
    <FastImage
      style={styles.userImageImageStyle}
      source={{
        uri:
          'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default memo(UserImageView);
