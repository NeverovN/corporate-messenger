import React, { FC, memo, useEffect, useState } from 'react';

// components
import MessageView from 'chat/chatScreen/components/Message';

// hooks
import { useOnMessagePressed } from 'chat/chatScreen/hooks/useOnMessagePressed';
import { useDirection } from 'chat/chatScreen/hooks/useDirection';

// utils
import { parseDate } from '../../utils/parseDate';
import { resolveMediaPromise } from '../../utils/resolveMediaPromise';

// types
import { IMessageItem } from '../../types/message';

interface IMessageContainerProps extends IMessageItem {
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

  useEffect(() => {
    if (props.content.media && props.content.media) {
      resolveMediaPromise(props.content.media, setImgBase64);
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
