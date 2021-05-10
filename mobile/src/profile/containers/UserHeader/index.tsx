import React, { memo, FC } from 'react';

import UserHeaderView from 'profile/components/UserHeader';

interface IUserHeaderContainerProps {}

const UserHeaderContainer: FC<IUserHeaderContainerProps> = () => {
  return <UserHeaderView />;
};

export default memo(UserHeaderContainer);
