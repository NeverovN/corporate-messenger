import React, { FC, memo, useState } from 'react';

// components
import SearchUsersScreenView from 'profile/components/SearchUsersScreen';

interface ISearchUsersScreenContainerProp {}

const SearchUsersScreenContainer: FC<ISearchUsersScreenContainerProp> = () => {
  const [filter, setFilter] = useState<string>('');

  return <SearchUsersScreenView filter={filter} onChangeFilter={setFilter} />;
};

export default memo(SearchUsersScreenContainer);
