// types
import { Comment } from '@/common/types/gql.generated';
import { ICommentItem } from '@/feed/types/comment';

export const editCommentSubmitValidate = (
  obj: Comment | ICommentItem,
  initText: string | null,
) => {
  if (Object.keys(obj).length === 0) {
    return false;
  }

  if (obj.content === initText) {
    return false;
  }

  if (obj.content === null) {
    return false;
  }

  return true;
};
