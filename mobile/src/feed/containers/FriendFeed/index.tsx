import React, { memo, FC } from 'react';

// components
import FriendFeedView from '@/feed/components/FriendFeed';

// hooks
import { useFriendFeedList } from 'feed/hooks/useFriendFeedList';

interface IFriendFeedContainerProps {}

const FriendFeed: FC<IFriendFeedContainerProps> = () => {
  const friendFeedList = useFriendFeedList();
  return <FriendFeedView data={friendFeedList} />;
};

export default memo(FriendFeed);
