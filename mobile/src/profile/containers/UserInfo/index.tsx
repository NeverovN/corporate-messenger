import React, { memo, FC } from 'react';

// components
import UserInfoView from 'profile/components/UserInfo';

// hooks
import { useGetUser } from '@/profile/hooks/useGetUser';

interface IUserInfoContainerProps {}

const UserInfoContainer: FC<IUserInfoContainerProps> = () => {
  const userName = useGetUser(); // implement userId via road var through navigation
  return (
    <UserInfoView
      userName={userName}
      userOnline="online"
      userStatus="User status"
    />
  );
};

export default memo(UserInfoContainer);
