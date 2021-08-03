import { IPostItem } from '../types/feed';

export const filterFeed = (feed: IPostItem[], filter: string) => {
  if (!filter) {
    return feed;
  }

  const normalizedFilter = filter.toLowerCase().replace(/\s/g, '');

  return feed.filter((post) => {
    const normalizedPost =
      post.textContent?.toLowerCase().replace(/\s/g, '') || '';
    return normalizedPost.includes(normalizedFilter);
  });
};
