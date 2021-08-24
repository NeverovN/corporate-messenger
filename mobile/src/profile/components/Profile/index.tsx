import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

import { useStyles } from './styles';

// containers
import MainTile from 'profile/containers/MainTile';

// components
import Tile from 'feed/containers/Tile';

// types
import { IPostItem } from 'feed/types/feed';

interface IProfileViewProps {
  data: Array<IPostItem>;
  refresh(): void;
  loading: boolean;
}

const renderPostItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      author={item.author}
      id={item.id}
      createdAt={item.createdAt}
      avatar={item.avatar}
      textContent={item.textContent}
      mediaContent={item.mediaContent}
    />
  );
};

const ProfileView: FC<IProfileViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.profileStyle}>
      <FlatList
        ListFooterComponent={MainTile}
        data={props.data}
        renderItem={renderPostItem}
        contentContainerStyle={styles.flatListStyle}
        onRefresh={props.refresh}
        refreshing={props.loading}
      />
    </View>
  );
};

export default memo(ProfileView);
