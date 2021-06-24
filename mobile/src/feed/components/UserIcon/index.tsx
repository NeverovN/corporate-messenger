import React, { FC, memo } from 'react';
import FastImage from 'react-native-fast-image';
// styles
import styles from './styles';

interface IUserIconViewProps {
  imgUrl: string;
}

const UserIconView: FC<IUserIconViewProps> = (props) => {
  return (
    <FastImage
      style={styles.userIconImageStyle}
      source={{ uri: props.imgUrl }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default memo(UserIconView);
