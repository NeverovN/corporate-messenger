import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// containers
import UserHeader from '@/profile/containers/UserHeader';
import FriendsListButton from '@/profile/containers/FriendListButton';
import AddPostButton from 'profile/containers/AddPostButton';

interface IMainTileViewProps {
  image: string | null;
}

const MainTileView: FC<IMainTileViewProps> = (props) => {
  return (
    <View style={styles.mainTileStyles}>
      <UserHeader image={props.image} />
      <View style={styles.buttonsWrapperStyle}>
        <AddPostButton />
        <View style={styles.separator} />
        <FriendsListButton />
      </View>
    </View>
  );
};

export default memo(MainTileView);
