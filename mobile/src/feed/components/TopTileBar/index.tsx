import React, { FC, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

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
    <View style={styles.topTileBarStyle}>
      <TouchableOpacity style={styles.touchableStyle} onPress={props.onPress}>
        <UserIconView avatar={props.avatar} />
        <UserDataView author={props.author} createdAt={props.createdAt} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(TopTileBarView);
