import { ID } from '../../types/common';

import { PostEntity } from '../../models/Post';

class PostEntityController {
  createPostEntity(author: ID): PostEntity {
    const newPost = new PostEntity(author);

    return newPost;
  }
}

const postEntityController = new PostEntityController();

export default postEntityController;
