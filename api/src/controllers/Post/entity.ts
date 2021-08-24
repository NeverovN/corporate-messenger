import { ID } from '../../types/common';

import { PostEntity } from '../../models/Post';

class PostEntityController {
  createPostEntity(
    authorId: ID,
    textContent: string | null,
    mediaContent: string[] | null,
  ): PostEntity {
    const newPost = new PostEntity(authorId, textContent, mediaContent);

    return newPost;
  }

  toggleLikes(post: PostEntity, likeAuthor: ID): PostEntity {
    if (post.likes.includes(likeAuthor)) {
      return this.removeLike(post, likeAuthor);
    } else {
      return this.addLike(post, likeAuthor);
    }
  }

  editPost(
    post: PostEntity,
    newTextContent: string | null,
    newMediaContent: string[] | null,
  ) {
    const newPost = { ...post };
    if (newPost.text !== newTextContent) {
      newPost.text = newTextContent;
    }

    if (newPost.media !== newMediaContent) {
      newPost.media = newMediaContent;
    }

    return newPost;
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
