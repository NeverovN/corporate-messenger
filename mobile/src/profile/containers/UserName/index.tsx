import React, { memo, FC } from 'react';

import UserNameView from 'profile/components/UserName';

interface IUserNameContainerProps {}

const UserNameContainer: FC<IUserNameContainerProps> = () => {
  return <UserNameView userName="Name Surname" />;
};

export default memo(UserNameContainer);
