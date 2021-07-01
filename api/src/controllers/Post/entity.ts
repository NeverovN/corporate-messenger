import { ID } from '../../types/common';

import { PostEntity } from '../../models/Post';

class PostEntityController {
  createPostEntity(authorId: ID, textContent: string): PostEntity {
    const newPost = new PostEntity(authorId, textContent);

    return newPost;
  }

  toggleLikes(post: PostEntity, likeAuthor: ID): PostEntity {
    if (post.likes.includes(likeAuthor)) {
      return this.removeLike(post, likeAuthor);
    } else {
      return this.addLike(post, likeAuthor);
    }
  }

  private addLike(post: PostEntity, author: ID): PostEntity {
    const newPost = { ...post };
    newPost.likes.push(author);
    return newPost;
  }

  private removeLike(post: PostEntity, author: ID): PostEntity {
    const newPost = { ...post };
    newPost.likes = newPost.likes.filter((userId) => userId !== author);
    return newPost;
  }
}

const postEntityController = new PostEntityController();

export default postEntityController;
