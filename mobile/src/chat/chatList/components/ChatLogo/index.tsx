import React, { FC, memo } from 'react';
import { Image } from 'react-native';

import styles from './styles';

interface IChatLogoViewProps {
  logo: string | null;
}

const ChatLogoView: FC<IChatLogoViewProps> = (props) => {
  return (
    <>
      {props.logo ? (
        <Image style={styles.chatLogoStyle} source={{ uri: props.logo }} />
      ) : (
        <Image
          style={styles.chatLogoStyle}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
    </>
  );
};

export default memo(ChatLogoView);
