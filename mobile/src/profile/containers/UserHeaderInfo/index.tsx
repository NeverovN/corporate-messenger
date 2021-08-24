import React, { memo, FC } from 'react';

import UserHeaderInfoView from 'profile/components/UserHeaderInfo';

interface IUserHeaderInfoContainerProps {}

const UserHeaderInfoContainer: FC<IUserHeaderInfoContainerProps> = () => {
  return <UserHeaderInfoView />;
};

export default memo(UserHeaderInfoContainer);
