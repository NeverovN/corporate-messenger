import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import { useStyles } from './styles';

// components
import TopBar from 'profile/components/TopBar';

// containers
import FriendList from 'profile/containers/FriendList';

interface IFriendsScreenViewProps {
  filter: string;
  onChangeFilter(filter: string): void;
}

const FriendsScreenView: FC<IFriendsScreenViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.screenStyle}>
      <TopBar filter={props.filter} onChangeFilter={props.onChangeFilter} />
      <FriendList filter={props.filter} />
    </View>
  );
};

export default memo(FriendsScreenView);
