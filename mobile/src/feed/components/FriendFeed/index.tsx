import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

// components
import Tile from '../Tile';

// styles
import styles from './styles';

// types
import { IPostItem } from 'feed/types/feed';

interface IFriendFeedListViewProps {
  data: IPostItem[];
}

const renderFeedItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      author={item.author}
      postId={item.id}
      createdAt={item.createdAt}
      avatar={item.avatar}
    />
  );
};

const FriendFeedView: FC<IFriendFeedListViewProps> = (props) => {
  return (
    <View style={styles.friendFeedStyle}>
      <FlatList renderItem={renderFeedItem} data={props.data} />
    </View>
  );
};

export default memo(FriendFeedView);
