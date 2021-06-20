import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopBar from 'profile/components/TopBar';

// containers
import UserList from 'profile/containers/UserList';

interface ISearchUsersScreenViewProp {
  filter: string;
  onChangeFilter(filter: string): void;
  search(): void;
}

const SearchUsersScreenView: FC<ISearchUsersScreenViewProp> = (props) => {
  return (
    <View style={styles.searchScreenStyle}>
      <TopBar
        onPress={props.search}
        filter={props.filter}
        onChangeFilter={props.onChangeFilter}
      />
      <UserList filter={props.filter} />
    </View>
  );
};

export default memo(SearchUsersScreenView);
