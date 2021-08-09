import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

// components
import Tile from 'feed/containers/Tile';

// styles
import { useStyles } from './styles';

// types
import { IPostItem } from 'feed/types/feed';

interface IFriendFeedListViewProps {
  data: IPostItem[];
}

const renderFeedItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      id={item.id}
      createdAt={item.createdAt}
      author={item.author}
      avatar={item.avatar}
      textContent={item.textContent}
      mediaContent={item.mediaContent}
    />
  );
};

const FriendFeedView: FC<IFriendFeedListViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.friendFeedStyle}>
      <FlatList renderItem={renderFeedItem} data={props.data} />
    </View>
  );
};

export default memo(FriendFeedView);
