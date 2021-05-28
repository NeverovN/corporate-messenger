import { ID } from '../../types/common';

import { PostEntity } from '../../models/Post';
// import { UserEntity } from '../../models/User';

class PostEntityController {
  // makeUsersRepost(author: UserEntity, repostingPerson: UserEntity) {
  //   // !TODO: make it work
  // }

  createPostEntity(author: ID): PostEntity {
    const newPost = new PostEntity(author);

    return newPost;
  }
}

const postEntityController = new PostEntityController();

export default postEntityController;
