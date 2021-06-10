import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopBar from 'profile/components/TopBar';

// containers
import UserList from 'profile/containers/UserList';

interface ISearchUsersScreenViewProp {
  search(): void;
}

const SearchUsersScreenView: FC<ISearchUsersScreenViewProp> = (props) => {
  return (
    <View style={styles.searchScreenStyle}>
      <TopBar onPress={props.search} />
      <UserList />
    </View>
  );
};

export default memo(SearchUsersScreenView);
