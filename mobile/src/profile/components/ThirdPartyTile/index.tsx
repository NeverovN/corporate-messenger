import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// containers
import UserHeader from 'profile/containers/UserHeader';
import StartChatButton from '@/profile/containers/StartChatButton';
import FriendButton from '@/profile/containers/FriendButton';

interface IThirdPartyTileViewProps {
  image: string | null;
}

const ThirdPartyTileView: FC<IThirdPartyTileViewProps> = (props) => {
  return (
    <View style={styles.thirdPartyTileStyles}>
      <UserHeader image={props.image} />
      <View style={styles.buttonsWrapperStyle}>
        <FriendButton />
        <View style={styles.separator} />
        <StartChatButton />
      </View>
    </View>
  );
};

export default memo(ThirdPartyTileView);
