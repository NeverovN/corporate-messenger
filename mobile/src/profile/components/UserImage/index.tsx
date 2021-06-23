import React, { FC, memo } from 'react';
import { Image } from 'react-native';

import styles from './styles';

interface IUserImageViewProps {}

const UserImageView: FC<IUserImageViewProps> = () => {
  return (
    <Image
      style={styles.userImageImageStyle}
      source={{
        uri:
          'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
      }}
    />
  );
};

export default memo(UserImageView);
