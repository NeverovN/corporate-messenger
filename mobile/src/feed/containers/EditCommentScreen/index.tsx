import React, { FC, memo, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

// components
import EditCommentScreenView from '@/feed/components/EditCommentScreen';

// containers
import HeaderRightSubmit from '../HeaderRightSubmit';

// cache
import { editComment } from 'common/cache/cache';

// types
import { ICommentItem } from 'feed/types/comment';

// hooks
import { useEditComment } from 'feed/hooks/useEditComment';
import { useInitialCommentTextValue } from '@/feed/hooks/useInitialCommentTextValue';

// utils
import { editCommentSubmitValidate } from 'feed/utils/editCommentSubmitValidate';

interface IEditCommentScreenContainerProps {}

const EditCommentScreenContainer: FC<IEditCommentScreenContainerProps> = () => {
  const navigation = useNavigation();

  const initialTextValue = useInitialCommentTextValue(editComment().id);

  const [textValue, setTextValue] = useState<string | null>(
    editComment().content,
  );
  const [comment, setComment] = useState<ICommentItem>(editComment());
  const editCommentHandler = useEditComment();

  useEffect(() => {
    const cachedComment = editComment({
      ...editComment(),
      content: textValue,
    });

    if (textValue === '') {
      setTextValue(null);
    }

    setComment(cachedComment);
  }, [textValue]);

  useEffect(() => {
    const currentCommentState = editCommentSubmitValidate(
      comment,
      initialTextValue,
    );

    navigation.setOptions({
      headerRight: () => (
        <HeaderRightSubmit
          isValid={!!currentCommentState}
          submit={editCommentHandler}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, comment]);

  return (
    <EditCommentScreenView
      textValue={textValue}
      onTextValueChange={setTextValue}
    />
  );
};

export default memo(EditCommentScreenContainer);
