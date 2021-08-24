import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import { useStyles } from './styles';

// components
import NewChatTopBar from 'chat/chatList/components/NewChatTopBar';

// containers
import UserList from 'chat/chatList/containers/UserList';

interface INewChatScreenViewProp {
  search(): void;
  filter: string;
  onChangeFilter(filter: string): void;
}

const NewChatScreenView: FC<INewChatScreenViewProp> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.newChatScreenStyle}>
      <NewChatTopBar
        filter={props.filter}
        onChangeFilter={props.onChangeFilter}
      />
      <UserList filter={props.filter} />
    </View>
  );
};

export default memo(NewChatScreenView);
