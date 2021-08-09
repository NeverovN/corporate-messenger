import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

// styles
import { useStyles } from './styles';

// containers
import { IPostItem } from '@/feed/types/feed';

// components
import Tile from 'feed/containers/Tile';
import ThirdPartyTile from 'profile/containers/ThirdPartyTile';

interface IThirdPartyUserViewProps {
  data: IPostItem[];
}

const renderPostItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      author={item.author}
      id={item.id}
      createdAt={item.createdAt}
      textContent={item.textContent}
      mediaContent={item.mediaContent}
      avatar={item.avatar}
    />
  );
};

const ThirdPartyUserView: FC<IThirdPartyUserViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.thirdPartyUserStyle}>
      <FlatList
        ListHeaderComponent={ThirdPartyTile}
        data={props.data}
        renderItem={renderPostItem}
      />
    </View>
  );
};

export default memo(ThirdPartyUserView);
