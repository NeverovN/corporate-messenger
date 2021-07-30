import React, { FC, memo, useState } from 'react';

// components
import NewChatSetupView from '../../components/NewChatSetup';
import { useGetSelectedUsers } from '../../hooks/useGetSelectedUsers';
import { useHandleNewChat } from '../../hooks/useHandleNewChat';
interface INewChatSetupContainerProps {}

const NewChatSetupContainer: FC<INewChatSetupContainerProps> = () => {
  const members = useGetSelectedUsers();
  const [title, setTitle] = useState<string>('');
  const createChat = useHandleNewChat(title);
  return (
    <NewChatSetupView
      currentTitle={title}
      setCurrentTitle={setTitle}
      members={members}
      createChat={createChat}
    />
  );
};

export default memo(NewChatSetupContainer);
