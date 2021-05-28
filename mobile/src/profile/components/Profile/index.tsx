import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

import styles from './styles';

// containers
import MainTile from 'profile/containers/MainTile';

// components
import Tile from 'feed/components/Tile';

// types
import { IPostItem } from 'feed/types/feed';

interface IProfileViewProps {
  data: Array<IPostItem>;
}

const renderPostItem: ListRenderItem<IPostItem> = () => {
  return <Tile />;
};

const ProfileView: FC<IProfileViewProps> = (props) => {
  return (
    <View style={styles.profileStyle}>
      <FlatList
        ListHeaderComponent={MainTile}
        data={props.data}
        renderItem={renderPostItem}
      />
    </View>
  );
};

export default memo(ProfileView);
