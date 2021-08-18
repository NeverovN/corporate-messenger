import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

// components
import Tile from 'feed/containers/Tile';

// types
import { IPostItem } from 'feed/types/feed';

// styles
import { useStyles } from './styles';
import SearchBar from '@/feed/containers/SearchBar';

interface IFeedListViewProps {
  data: IPostItem[];
  setFilter(filter: string): void;
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
  const styles = useStyles();
  return (
    <View style={styles.feedStyle}>
      <FlatList
        ListHeaderComponent={<SearchBar setFilter={props.setFilter} />}
        renderItem={renderFeedItem}
        data={props.data}
      />
    </View>
  );
};

export default memo(FeedView);
