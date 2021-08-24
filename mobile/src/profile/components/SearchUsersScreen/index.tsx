import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import { useStyles } from './styles';

// components
import TopBar from 'profile/components/TopBar';

// containers
import UserList from 'profile/containers/UserList';

interface ISearchUsersScreenViewProp {
  filter: string;
  onChangeFilter(filter: string): void;
}

const SearchUsersScreenView: FC<ISearchUsersScreenViewProp> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.searchScreenStyle}>
      <TopBar filter={props.filter} onChangeFilter={props.onChangeFilter} />
      <UserList filter={props.filter} />
    </View>
  );
};

export default memo(SearchUsersScreenView);
