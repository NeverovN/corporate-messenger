import { ID } from '../../types/common';

import { CommentEntity } from '../../models/Comment';

class CommentEntityController {
  createCommentEntity(
    authorId: ID,
    postId: ID,
    content: string,
  ): CommentEntity {
    return new CommentEntity(authorId, postId, content);
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

  edit(comment: CommentEntity, newText: string) {
    const newComment = { ...comment };

    if (newComment.content !== newText) {
      newComment.content = newText;
    }

    return newComment;
  }
}

const commentEntityController = new CommentEntityController();

export default commentEntityController;
