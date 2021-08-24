import React, { FC, memo } from 'react';

// components
import TopTileBarView from 'feed/components/TopTileBar';
import { useUserRedirection } from '@/feed/hooks/useUserRedirection';
import { getFormattedDate } from '@/feed/utils/getFormatDate';

interface ITopTileBarContainerProps {
  id: string;
  author: {
    id: string;
    name: string;
  };
  createdAt: string;
  avatar: string | null;
}

const TopTileBarContainer: FC<ITopTileBarContainerProps> = (props) => {
  const userRedirection = useUserRedirection(props.author.id);
  const date = getFormattedDate(props.createdAt);
  return (
    <TopTileBarView
      id={props.id}
      onUserPress={userRedirection}
      author={props.author.name}
      createdAt={date}
      avatar={props.avatar}
    />
  );
};

export default memo(TopTileBarContainer);
