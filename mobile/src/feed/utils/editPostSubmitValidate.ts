// types
import { Post } from '@/common/types/gql.generated';
import { IPostItem } from '@/feed/types/feed';

export const editPostSubmitValidate = (
  obj: Post | IPostItem,
  initText: string | null,
  initMedia: string[] | null,
) => {
  if (Object.keys(obj).length === 0) {
    return false;
  }

  if (obj.textContent === initText && obj.mediaContent === initMedia) {
    return false;
  }

  if (obj.mediaContent === null && obj.textContent === null) {
    return false;
  }

  return true;
};
