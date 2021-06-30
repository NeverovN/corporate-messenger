import { ID } from '../../types/common';

import { PostEntity } from '../../models/Post';

class PostEntityController {
  createPostEntity(authorId: ID): PostEntity {
    const newPost = new PostEntity(authorId);

    return newPost;
  }

  mutateLikes(post: PostEntity, likeAuthor: ID): PostEntity {
    const newPost = { ...post };

    // is this logic necessary
    const { likes } = newPost;
    let newLikesArr;
    if (likes.includes(likeAuthor)) {
      newLikesArr = likes.filter((like) => like !== likeAuthor);
    } else {
      newLikesArr = [...likes];
      newLikesArr.push(likeAuthor);
    }

    newPost.likes = newLikesArr;

    return newPost;
  }
}

const postEntityController = new PostEntityController();

export default postEntityController;
