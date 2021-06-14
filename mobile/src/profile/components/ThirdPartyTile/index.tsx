import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// containers
import UserHeader from 'profile/containers/UserHeader';
import StartChatButton from '@/profile/containers/StartChatButton';
import FriendButton from '@/profile/containers/FriendButton';

interface IThirdPartyTileViewProps {}

const ThirdPartyTileView: FC<IThirdPartyTileViewProps> = () => {
  return (
    <View style={styles.thirdPartyTileStyles}>
      <UserHeader />
      <FriendButton />
      <StartChatButton />
    </View>
  );
};

export default memo(ThirdPartyTileView);
