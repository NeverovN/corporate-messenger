import { ID } from '../../types/common';

import { PostEntity } from '../../models/Post';

class PostEntityController {
  createPostEntity(authorId: ID, textContent: string): PostEntity {
    const newPost = new PostEntity(authorId, textContent);

    return newPost;
  }
}

const postEntityController = new PostEntityController();

export default postEntityController;
