import React, { memo, FC } from 'react';

// components
import FeedView from '../../components/Feed';

interface IFeedContainerProps {}

const Feed: FC<IFeedContainerProps> = (props) => {
  return <FeedView />;
};

export default memo(Feed);
