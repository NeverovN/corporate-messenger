import React, { FC, memo } from 'react';

// components
import SearchUsersScreenView from 'profile/components/SearchUsersScreen';

interface ISearchUsersScreenContainerProp {}

const SearchUsersScreenContainer: FC<ISearchUsersScreenContainerProp> = () => {
  return <SearchUsersScreenView />;
};

export default memo(SearchUsersScreenContainer);
