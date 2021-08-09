import React, { FC, memo } from 'react';
import FastImage from 'react-native-fast-image';
// styles
import { useStyles } from './styles';

interface IUserIconViewProps {
  avatar: string | null;
}

const UserIconView: FC<IUserIconViewProps> = (props) => {
  const styles = useStyles();
  return (
    <>
      {props.avatar ? (
        <FastImage
          style={styles.userIconImageStyle}
          source={{ uri: props.avatar }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      ) : (
        <FastImage
          style={styles.userIconImageStyle}
          source={require('common/assets/images/defaultAvatar.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
    </>
  );
};

export default memo(UserIconView);
