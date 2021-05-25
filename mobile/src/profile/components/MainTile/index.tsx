import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// containers
import UserHeader from '@/profile/containers/UserHeader';
import EditButton from 'profile/containers/EditButton';
import AddPostButon from 'profile/containers/AddPostButton';
import { useState } from 'react';

interface IMainTileViewProps {}

const MainTileView: FC<IMainTileViewProps> = () => {
  const [, setRerender] = useState(0);
  return (
    <>
      <View style={styles.mainTileStyles}>
        <UserHeader />
        <EditButton />
      </View>
      <AddPostButon />
    </>
  );
};

export default memo(MainTileView);
