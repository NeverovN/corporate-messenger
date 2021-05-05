import React, { memo, FC } from 'react';

// components
import FriendFeedView from 'feed/components/FriendFeed';

interface IFriendFeedContainerProps {}

const FriendFeed: FC<IFriendFeedContainerProps> = (props) => {
  return <FriendFeedView />;
};

export default memo(FriendFeed);
