import React, { memo, FC } from 'react';
import { Image, ImageStyle } from 'react-native';

// styles
import styles from './styles';

interface IUserImageContainerProps {
  image: string | null;
  size?: number;
}

const UserImageContainer: FC<IUserImageContainerProps> = (props) => {
  const style: ImageStyle = {
    height: props.size,
    width: props.size,
    borderRadius: props.size,
  };
  return (
    <>
      {props.image ? (
        <Image
          style={{ ...styles.imageStyle, ...style }}
          source={{ uri: props.image }}
        />
      ) : (
        <Image
          style={{ ...styles.imageStyle, ...style }}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
    </>
  );
};

export default memo(UserImageContainer);
