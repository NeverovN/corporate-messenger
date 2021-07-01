import { ID } from '../../types/common';

import { CommentEntity } from '../../models/Comment';

class CommentEntityController {
  createCommentEntity(authorId: ID, content: string): CommentEntity {
    return new CommentEntity(authorId, content);
  }
}

const commentEntityController = new CommentEntityController();

export default commentEntityController;
