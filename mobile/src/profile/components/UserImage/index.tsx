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
          'https://cdn3.vectorstock.com/i/1000x1000/26/97/continuous-one-line-drawing-circle-minimalism-art-vector-25552697.jpg',
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default memo(UserImageView);
