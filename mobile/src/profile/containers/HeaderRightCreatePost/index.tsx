import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from './styles';
import { Post } from '@/common/types/gql.generated';
import { newPost } from '@/common/cache/cache';
import { useAddPost } from '@/profile/hooks/useAddPost';

const HeaderRightEmail: FC = () => {
  const [post, setPost] = useState<Post>(newPost());
  const addPost = useAddPost();

  const cachedPost = useMemo(() => newPost(), [newPost()]);

  useEffect(() => {
    setPost(newPost());
  }, [cachedPost]);

  if (post) {
    return (
      <TouchableOpacity onPress={addPost}>
        <Icon name="check" style={styles.activeIconStyle} size={25} />
      </TouchableOpacity>
    );
  }

  return <Icon name="check" style={styles.disabledIconStile} size={25} />;
};

export default memo(HeaderRightEmail);
