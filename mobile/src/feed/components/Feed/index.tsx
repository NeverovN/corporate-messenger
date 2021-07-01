import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

// components
import Tile from '../Tile';

// types
import { IPostItem } from 'profile/types/post';

// styles
import styles from './styles';

interface IFeedListViewProps {
  data: IPostItem[];
}

const renderFeedItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      textContent={item.textContent}
      author={item.author}
      postId={item.id}
      createdAt={item.createdAt}
      avatar={item.avatar}
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
