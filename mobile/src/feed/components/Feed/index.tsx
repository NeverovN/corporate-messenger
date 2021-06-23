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
      username={item.author}
      avatar={item.avatar}
      createdAt={item.createdAt}
      textContent={item.textContent}
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
