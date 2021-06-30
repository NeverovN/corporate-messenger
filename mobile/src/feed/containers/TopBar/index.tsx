import React, { FC, memo } from 'react';

// components
import TopTileBarView from 'feed/components/TopTileBar';
import { useRedirection } from '@/feed/hooks/useRedirection';
import { getFormattedDate } from '@/feed/utils/getFormatteDate';

interface ITopTileBarContainerProps {
  author: string;
  createdAt: string;
  avatar: string;
}

const TopTileBarContainer: FC<ITopTileBarContainerProps> = (props) => {
  const redirection = useRedirection('60b8926c41a82dd18ffdda88');
  const date = getFormattedDate(props.createdAt);
  return (
    <TopTileBarView
      onPress={redirection}
      author={props.author}
      createdAt={date}
      avatar={props.avatar}
    />
  );
};

export default memo(TopTileBarContainer);
