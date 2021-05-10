import React, { FC, memo } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';

// styles
import styles from './styles';

interface IChatsViewProps {
  data: ReadonlyArray<IFlatListProps>;
}

interface IFlatListProps {
  id: number;
  data: typeof React.Component;
}

const ChatView: FC<IChatsViewProps> = (props) => {
  return (
    <View style={styles.chatsStyle}>
      <FlatList<IFlatListProps>
        renderItem={({ item }) => <ListItem Component={item.data} />}
        data={props.data}
      />
    </View>
  );
};

export default memo(ChatView);
