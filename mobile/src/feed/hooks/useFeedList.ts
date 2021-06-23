import { useGetFeedQuery } from '@/common/types/gql.generated';
import { getMedia } from '@/profile/utils/getMedia';
import { getName } from '@/profile/utils/getName';

export const useFeedList = () => {
  const { data } = useGetFeedQuery();

  if (!data || !data.getAllPosts) {
    return [] as any;
  }

  return data.getAllPosts.map((post) => {
    const name = getName(post?.author.firstName, post?.author.lastName);
    const media = getMedia(post?.mediaContent);
    return {
      id: post?.id || '',
      author: name,
      avatar:
        post?.author.avatar ||
        'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
      createdAt: post?.createdAt || '',
      textContent: post?.textContent || '',
      mediaContent: media,
    };
  });
};
