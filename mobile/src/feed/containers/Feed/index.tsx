import React, { memo, FC } from 'react';

// components
import FeedView from 'feed/components/Feed';

// hooks
import { useFeedList } from 'feed/hooks/useFeedList';

interface IFeedContainerProps {}

const Feed: FC<IFeedContainerProps> = (props) => {
  const feedList = useFeedList();
  return <FeedView data={feedList} />;
};

export default memo(Feed);
