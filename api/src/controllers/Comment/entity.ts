import { ID } from '../../types/common';

import { CommentEntity } from '../../models/Comment';

class CommentEntityController {
  createCommentEntity(authorId: ID): CommentEntity {
    return new CommentEntity(authorId);
  }
}

const commentEntityController = new CommentEntityController();

export default commentEntityController;
