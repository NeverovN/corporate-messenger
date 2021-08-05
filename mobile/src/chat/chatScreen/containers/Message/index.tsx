import React, { FC, memo, useEffect, useState } from 'react';

// components
import MessageView from 'chat/chatScreen/components/Message';

// hooks
import { useOnMessagePressed } from 'chat/chatScreen/hooks/useOnMessagePressed';
import { useDirection } from 'chat/chatScreen/hooks/useDirection';

// constants
import { parseDate } from '../../utils/parseDate';
import { IMessageItem } from '../../types/message';

interface IMessageContainerProps {
  content: {
    media: Promise<string[]> | null;
    text: string;
    mediaCount: number;
  };
  id: string;
  author: {
    id: string;
    name: string;
  };
  createdAt: string;
  lastEdit: string | null;
  isRead: boolean;
  currentUserId: string;
  setMessageEdit(msg: IMessageItem | null): void;
}

const MessageContainer: FC<IMessageContainerProps> = (props) => {
  const direction = useDirection(props.author.id, props.currentUserId);
  const onPress = useOnMessagePressed(props.id);
  const createdAt = parseDate(props.createdAt);
  const lastEdit = parseDate(props.lastEdit);
  const [imgBase64, setImgBase64] = useState<string[]>(
    Array(props.content.mediaCount).fill('default'),
  );

  const resolveMediaPromise = async (promisedMedia: Promise<string[]>) => {
    const media = await promisedMedia;
    setImgBase64(media);
  };

  useEffect(() => {
    if (props.content.media) {
      resolveMediaPromise(props.content.media);
    }
  }, [props.content.media]);

  if (!createdAt) {
    throw Error('msg loading error');
  }

  return (
    <MessageView
      onPress={onPress}
      setEditMessage={props.setMessageEdit}
      content={{ ...props.content, media: imgBase64 }}
      direction={direction}
      author={props.author}
      createdAt={createdAt}
      isRead={props.isRead}
      lastEdit={lastEdit}
      id={props.id}
    />
  );
};

export default memo(MessageContainer);
