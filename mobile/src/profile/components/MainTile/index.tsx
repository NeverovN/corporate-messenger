import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// containers
import UserHeader from '@/profile/containers/UserHeader';

interface IMainTileViewProps {}

const MainTileView: FC<IMainTileViewProps> = () => {
  return (
    <View style={styles.mainTileStyles}>
      <UserHeader />
    </View>
  );
};

export default memo(MainTileView);
