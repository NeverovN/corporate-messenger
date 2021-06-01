import React, { memo, FC } from 'react';

// components
import UserInfoView from 'profile/components/UserInfo';

// hooks
import { useGetUserName } from 'profile/hooks/useGetUserName';

interface IUserInfoContainerProps {}

const UserInfoContainer: FC<IUserInfoContainerProps> = () => {
  const userName = useGetUserName();
  console.log(userName?.firstName && userName?.firstName);
  return (
    <UserInfoView
      userName={`${
        (userName?.firstName && userName?.firstName) || 'defUserFName'
      } ${(userName?.lastName && userName?.lastName) || 'defUserSName'}`} // that will work correct when changes of links from pr#25 come
      userOnline="online"
      userStatus="User status"
    />
  );
};

export default memo(UserInfoContainer);
