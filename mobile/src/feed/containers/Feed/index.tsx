import React, { memo, FC, useState } from 'react';

// components
import FeedView from '@/feed/components/Feed';

// hooks
import { useFeedList } from '@/feed/hooks/useFeedList';

interface IFeedContainerProps {}

const Feed: FC<IFeedContainerProps> = () => {
  const [filter, setFilter] = useState<string>('');
  const feedList = useFeedList(filter);
  return <FeedView data={feedList} setFilter={setFilter} />;
};

export default memo(Feed);
