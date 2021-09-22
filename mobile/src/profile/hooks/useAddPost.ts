import { newPost } from '@/common/cache/cache';
import { useNavigation } from '@react-navigation/native';
import {
  useCreatePostMutation,
  PostFragmentFragmentDoc,
} from 'common/types/gql.generated';

import analytics from '@react-native-firebase/analytics';

analytics().setAnalyticsCollectionEnabled(true);

export const useAddPost = () => {
  const navigation = useNavigation();
  const [createPost] = useCreatePostMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getPosts(exPosts = []) {
            try {
              const post = cache.writeFragment({
                fragment: PostFragmentFragmentDoc,
                data: data.createPost,
              });
              return [...exPosts, post];
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });
  return async () => {
    try {
      const post = newPost();
      await createPost({
        variables: {
          textContent: post.textContent,
          mediaContent: post.mediaContent,
        },
      });
      console.log('before');

      await analytics().logEvent('add_post', {
        text: post.textContent,
      });

      console.log('after');

      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };
};
