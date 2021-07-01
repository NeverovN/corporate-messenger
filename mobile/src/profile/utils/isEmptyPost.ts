import { Post } from '@/common/types/gql.generated';

export const isEmptyPost = (obj: Post) => {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  if (typeof obj.mediaContent !== 'undefined') {
    return false;
  }
  if (obj.textContent !== '') {
    return false;
  }

  return true;
};
