import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

// styles
import styles from './styles';

// containers
import { IPostItem } from '@/feed/types/feed';

// components
import Tile from 'feed/components/Tile';
import ThirdPartyTile from '../ThirdPartyTile';

interface IThirdPartyUserViewProps {
  data: IPostItem[];
}

const renderPostItem: ListRenderItem<IPostItem> = () => {
  return <Tile />;
};

const ThirdPartyUserView: FC<IThirdPartyUserViewProps> = (props) => {
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
