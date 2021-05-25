import React, { memo, FC } from 'react';

import UserOnlineView from 'profile/components/UserOnline';

interface IUserOnlineContainerProps {}

const UserOnlineContainer: FC<IUserOnlineContainerProps> = () => {
  return <UserOnlineView userOnline="online" />;
};

export default memo(UserOnlineContainer);
