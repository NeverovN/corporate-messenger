import { ID } from '../../types/common';

import { PostEntity } from '../../models/Post';
import { UserEntity } from '../../models/User';

class PostEntityController {
  createPostEntity(author: UserEntity): PostEntity {
    const newPost = new PostEntity(author);

    return newPost;
  }
}

const postEntityController = new PostEntityController();

export default postEntityController;
