import React, { FC, memo } from 'react';

// components
import TopBarTextView from 'chat/components/TopBarText';

interface ITopBarTextContainerProps {}

const TopBarTextContainer: FC<ITopBarTextContainerProps> = () => {
  return <TopBarTextView text="Chats" />;
};

export default memo(TopBarTextContainer);
