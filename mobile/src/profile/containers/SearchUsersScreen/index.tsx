import React, { FC, memo, useState } from 'react';

// components
import SearchUsersScreenView from 'profile/components/SearchUsersScreen';

// hooks
import { useGetSearch } from 'profile/hooks/useGetSearch';

interface ISearchUsersScreenContainerProp {}

const SearchUsersScreenContainer: FC<ISearchUsersScreenContainerProp> = () => {
  const [filter, setFilter] = useState<string>('');
  const search = useGetSearch(filter);
  return (
    <SearchUsersScreenView
      search={search}
      filter={filter}
      onChangeFilter={setFilter}
    />
  );
};

export default memo(SearchUsersScreenContainer);
