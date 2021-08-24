import React, { FC, memo, useState } from 'react';

// components
import CreatePostScreenView from '@/feed/components/CreatePostScreen';
import { useNavigation } from '@react-navigation/core';
import HeaderRightSubmit from '../HeaderRightSubmit';
import { useEffect } from 'react';
import { newPost } from '@/common/cache/cache';
import { Post } from '@/common/types/gql.generated';
import { useAddPost } from '@/profile/hooks/useAddPost';
import { isEmptyPost } from '@/profile/utils/isEmptyPost';

interface ICreatePostScreenContainerProps {}

const CreatePostScreenContainer: FC<ICreatePostScreenContainerProps> = () => {
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
        <HeaderRightSubmit isValid={!!currentPostState} submit={addPost} />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, post]);

  return (
    <CreatePostScreenView
      textValue={textValue}
      onTextValueChange={setTextValue}
    />
  );
};

export default memo(CreatePostScreenContainer);
