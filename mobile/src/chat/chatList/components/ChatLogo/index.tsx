import React, { FC, memo } from 'react';
import FastImage from 'react-native-fast-image';

import { useStyles } from './styles';

interface IChatLogoViewProps {
  logo: string | null;
}

const ChatLogoView: FC<IChatLogoViewProps> = (props) => {
  const styles = useStyles();
  return (
    <>
      {props.logo ? (
        <FastImage style={styles.chatLogoStyle} source={{ uri: props.logo }} />
      ) : (
        <FastImage
          style={styles.chatLogoStyle}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
    </>
  );
};

export default memo(ChatLogoView);
