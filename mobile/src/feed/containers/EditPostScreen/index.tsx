import React, { FC, memo, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';

// components
import EditPostScreenView from 'feed/components/EditPostScreen';
import HeaderRightEditPost from '../HeaderRightCreatePost';

// cache
import { editPost } from 'common/cache/cache';

// types
import { EditPostScreenRouteProp } from 'feed/types/routes';
import { IPostItem } from 'feed/types/feed';

// hooks
import { useEditPost } from 'feed/hooks/useEditPost';
import { useInitialTextValue } from 'feed/hooks/useInitialTextValue';
import { useInitialMediaValue } from 'feed/hooks/useInitialMediaValue';

// utils
import { editPostSubmitValidate } from 'feed/utils/editPostSubmitValidate';

interface IEditPostScreenContainerProps {}

const EditPostScreenContainer: FC<IEditPostScreenContainerProps> = () => {
  const navigation = useNavigation();
  const { params } = useRoute<EditPostScreenRouteProp>();

  const initialTextValue = useInitialTextValue(params.postId);
  const initialMediaVale = useInitialMediaValue(params.postId);

  const [textValue, setTextValue] = useState<string | null>(params.text);
  const [mediaValue, setMediaValue] = useState<string[] | null>(params.media);
  const [post, setPost] = useState<IPostItem>(editPost());
  const editPostHandler = useEditPost();

  useEffect(() => {
    const cachedPost = editPost({
      ...editPost(),
      textContent: textValue,
      mediaContent: mediaValue,
    });

    if (textValue === '') {
      setTextValue(null);
    }

    if (mediaValue?.length === 0) {
      setMediaValue(null);
    }

    setPost(cachedPost);
  }, [textValue, mediaValue]);

  useEffect(() => {
    const currentPostState = editPostSubmitValidate(
      post,
      initialTextValue,
      initialMediaVale,
    );
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightEditPost
          isPost={!!currentPostState}
          create={editPostHandler}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, post]);

  return (
    <EditPostScreenView
      textValue={textValue}
      onTextValueChange={setTextValue}
      mediaValue={mediaValue}
      onMediaValueChange={setMediaValue}
    />
  );
};

export default memo(EditPostScreenContainer);
