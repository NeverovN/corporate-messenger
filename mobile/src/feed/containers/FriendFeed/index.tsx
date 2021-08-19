import React, { memo, FC } from 'react';

// components
import FriendFeedView from '@/feed/components/FriendFeed';

// hooks
import { useFriendFeedList } from 'feed/hooks/useFriendFeedList';

interface IFriendFeedContainerProps {}

const FriendFeed: FC<IFriendFeedContainerProps> = () => {
  const { data, refresh, loading } = useFriendFeedList();
  return <FriendFeedView data={data} refresh={refresh} loading={loading} />;
};

export default memo(FriendFeed);
