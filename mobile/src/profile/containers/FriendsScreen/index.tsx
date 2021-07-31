import React, { FC, memo, useState } from 'react';

// components
import FriendsScreenView from '@/profile/components/FriendsScreen';

interface IFriendsScreenContainerProps {}

const FriendsScreenContainer: FC<IFriendsScreenContainerProps> = () => {
  const [filter, setFilter] = useState<string>('');
  return <FriendsScreenView filter={filter} onChangeFilter={setFilter} />;
};

export default memo(FriendsScreenContainer);
