import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// containers
import UserHeader from '@/profile/containers/UserHeader';
import EditButton from 'profile/containers/EditButton';
import AddPostButton from 'profile/containers/AddPostButton';

interface IMainTileViewProps {}

const MainTileView: FC<IMainTileViewProps> = () => {
  return (
    <>
      <View style={styles.mainTileStyles}>
        <UserHeader />
        <EditButton />
      </View>
      <AddPostButton />
    </>
  );
};

export default memo(MainTileView);
