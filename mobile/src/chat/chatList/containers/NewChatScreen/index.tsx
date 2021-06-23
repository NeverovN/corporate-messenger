import React, { FC, memo, useState } from 'react';

import NewChatScreenView from 'chat/chatList/components/NewChatScreen';

interface INewChatScreenContainerProps {}

const NewChatScreenContainer: FC<INewChatScreenContainerProps> = () => {
  const [filter, setFilter] = useState<string>('');
  return (
    <NewChatScreenView
      search={() => console.log('search pressed')}
      filter={filter}
      onChangeFilter={setFilter}
    />
  );
};

export default memo(NewChatScreenContainer);
