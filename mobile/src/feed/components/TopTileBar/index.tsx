import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

// components
import UserDataView from '../UserData';
import UserIconView from '../UserIcon';

interface ITopTileBarViewProps {}

const TopTileBarView: FC<ITopTileBarViewProps> = () => {
  return (
    <TouchableOpacity style={styles.topTileBarStyle}>
      <UserIconView />
      <UserDataView />
    </TouchableOpacity>
  );
};

export default memo(TopTileBarView);
