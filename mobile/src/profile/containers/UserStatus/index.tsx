import React, { memo, FC } from 'react';

import UserStatusView from 'profile/components/UserStatus';

interface IUserStatusContainerProps {}

const UserStatusContainer: FC<IUserStatusContainerProps> = () => {
  return <UserStatusView userStatus="User status" />;
};

export default memo(UserStatusContainer);
