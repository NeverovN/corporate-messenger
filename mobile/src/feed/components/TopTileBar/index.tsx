import React, { FC, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

// styles
import styles from './styles';

// components
import UserDataView from '../UserData';
import UserIconView from '../UserIcon';

// containers
import PostMenuButton from 'feed/containers/PostMenuButton';

interface ITopTileBarViewProps {
  onPress(): void;
  id: string;
  avatar: string;
  author: string;
  createdAt: string;
}

const TopTileBarView: FC<ITopTileBarViewProps> = (props) => {
  return (
    <TouchableOpacity style={styles.barStyle} onPress={props.onPress}>
      <View style={styles.userInfoStyle}>
        <UserIconView avatar={props.avatar} />
        <UserDataView author={props.author} createdAt={props.createdAt} />
      </View>
      <PostMenuButton postId={props.id} />
    </TouchableOpacity>
  );
};

export default memo(TopTileBarView);
