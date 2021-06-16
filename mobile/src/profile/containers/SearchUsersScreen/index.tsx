import React, { FC, memo, useState } from 'react';

// components
import SearchUsersScreenView from 'profile/components/SearchUsersScreen';

// hooks
import { useGetSearch } from 'profile/hooks/useGetSearch';

interface ISearchUsersScreenContainerProp {}

const SearchUsersScreenContainer: FC<ISearchUsersScreenContainerProp> = () => {
  const [searchString, setSearchString] = useState<string>('');
  const search = useGetSearch(searchString);
  return (
    <SearchUsersScreenView
      search={search}
      filter={searchString}
      onChangeFilter={setSearchString}
    />
  );
};

export default memo(SearchUsersScreenContainer);
