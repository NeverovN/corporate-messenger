import React, { memo, FC, useState } from 'react';

// components
import FeedView from '@/feed/components/Feed';

// hooks
import { useFeedList } from '@/feed/hooks/useFeedList';

interface IFeedContainerProps {}

const Feed: FC<IFeedContainerProps> = () => {
  const [filter, setFilter] = useState<string>('');
  const { data, refresh, loading } = useFeedList(filter);
  return (
    <FeedView
      data={data}
      setFilter={setFilter}
      refresh={refresh}
      loading={loading}
    />
  );
};

export default memo(Feed);
