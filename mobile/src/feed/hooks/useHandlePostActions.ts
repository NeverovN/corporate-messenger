import { useDeletePostByIdMutation } from '@/common/types/gql.generated';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';

// consts
import { EDIT_POST_SCREEN_NAME } from '../constants/routes';
import ACTIONS from 'feed/constants/actions';

// types
import { PostStackNavigationProp } from 'feed/types/routes';
import { newPost } from '@/common/cache/cache';

export const useHandlePostActions = () => {
  const navigation = useNavigation<PostStackNavigationProp>();

  const [deletePost] = useDeletePostByIdMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getAllPosts() {
            try {
              cache.gc();
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });

  return async (action: string, postId: string) => {
    switch (action) {
      case ACTIONS.DELETE_POST: {
        try {
          await deletePost({ variables: { postId } });
        } catch (err) {
          Alert.alert('Error', `${err}`);
        }
        break;
      }
      case ACTIONS.EDIT_POST: {
        newPost();
        navigation.navigate(EDIT_POST_SCREEN_NAME, {postId, text: });
      }
    }
  };
};

type MessageType = {
  id: string;
  content: string;
  createdAt: string;
  author: string;
};
