import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

// components
import Tile from 'feed/containers/Tile';

// types
import { IPostItem } from 'feed/types/feed';

// styles
import styles from './styles';

interface IFeedListViewProps {
  data: IPostItem[];
}

const renderFeedItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      author={item.author}
      avatar={item.avatar}
      id={item.id}
      textContent={item.textContent}
      createdAt={item.createdAt}
      mediaContent={item.mediaContent}
    />
  );
};

const FeedView: FC<IFeedListViewProps> = (props) => {
  return (
    <View style={styles.feedStyle}>
      <FlatList renderItem={renderFeedItem} data={props.data} />
    </View>
  );
};

export default memo(FeedView);
