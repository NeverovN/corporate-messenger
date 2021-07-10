import React, { FC, memo, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

// components
import EditPostScreenView from '@/feed/components/EditPostScreen';
import HeaderRightEditPost from '../HeaderRightCreatePost';

// cache
import { newPost } from '@/common/cache/cache';

// types
import { Post } from '@/common/types/gql.generated';

// hooks
import { useAddPost } from '@/profile/hooks/useAddPost';

// utils
import { isEmptyPost } from '@/profile/utils/isEmptyPost';

interface IEditPostScreenContainerProps {}

const EditPostScreenContainer: FC<IEditPostScreenContainerProps> = () => {
  const navigation = useNavigation();
  const [textValue, setTextValue] = useState<string>('');
  const [post, setPost] = useState<Post>(newPost());
  const addPost = useAddPost();

  useEffect(() => {
    const cachedPost = newPost({ ...newPost(), textContent: textValue });
    setPost(cachedPost);
  }, [textValue]);

  useEffect(() => {
    const currentPostState = isEmptyPost(post) ? null : newPost();
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightEditPost post={currentPostState} create={addPost} />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, post]);

  return (
    <EditPostScreenView
      textValue={textValue}
      onTextValueChange={setTextValue}
    />
  );
};

export default memo(EditPostScreenContainer);
