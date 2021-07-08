import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

// components
import UserDataView from '../UserData';
import UserIconView from '../UserIcon';

interface ITopTileBarViewProps {
  onPress(): void;
  avatar: string;
  author: string;
  createdAt: string;
}

const TopTileBarView: FC<ITopTileBarViewProps> = (props) => {
  return (
    <TouchableOpacity style={styles.topTileBarStyle} onPress={props.onPress}>
      <UserIconView avatar={props.avatar} />
      <UserDataView author={props.author} createdAt={props.createdAt} />
    </TouchableOpacity>
  );
};

export default memo(TopTileBarView);
