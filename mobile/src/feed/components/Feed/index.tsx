import React, { FC, memo } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

interface IFeedComponentProps {
  data: ReadonlyArray<IFlatListProps>;
}

interface IFlatListProps {
  id: number;
  data: typeof React.Component;
}

const FeedView: FC<IFeedComponentProps> = (props) => {
  return (
    <FlatList<IFlatListProps>
      renderItem={({ item }) => <ListItem Component={item.data} />}
      data={props.data}
    />
  );
};

export default memo(FeedView);
