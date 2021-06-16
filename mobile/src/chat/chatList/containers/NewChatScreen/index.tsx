import React, { FC, memo, useState } from 'react';

import NewChatScreenView from 'chat/chatList/components/NewChatScreen';

interface INewChatScreenContainerProps {}

const NewChatScreenContainer: FC<INewChatScreenContainerProps> = () => {
  const [searchString, setSearchString] = useState<string>('');
  return (
    <NewChatScreenView
      search={() => console.log('search pressed')}
      filter={searchString}
      onChangeFilter={setSearchString}
    />
  );
};

export default memo(NewChatScreenContainer);
