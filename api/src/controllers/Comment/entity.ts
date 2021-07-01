import { ID } from '../../types/common';

import { CommentEntity } from '../../models/Comment';

class CommentEntityController {
  createCommentEntity(authorId: ID, content: string): CommentEntity {
    return new CommentEntity(authorId, content);
  }

  like(comment: CommentEntity, author: ID) {
    const newComment = { ...comment };

    if (newComment.likes.includes(author)) {
      newComment.likes = newComment.likes.filter((user) => user !== author);
    } else {
      newComment.likes.push(author);
    }

    return newComment;
  }
}

const commentEntityController = new CommentEntityController();

export default commentEntityController;
