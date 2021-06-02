import { ID } from '../../types/common';

import { PostEntity } from '../../models/Post';

class PostEntityController {
  createPostEntity(authorId: ID): PostEntity {
    const newPost = new PostEntity(authorId);

    return newPost;
  }
}

const postEntityController = new PostEntityController();

export default postEntityController;
