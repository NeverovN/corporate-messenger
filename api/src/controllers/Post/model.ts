import { ID } from '../../types/common';

import PostModel, { PostEntity } from '../../models/Post';
import { PostDocument } from '../../models/Post/types';

import { mapPostDocumentToPostEntity } from '../../models/Post/mappers';
import PostEntityController from './entity';

class PostModelController {
  private mapPostWithFallback(post: PostDocument | null): PostEntity | null {
    if (!post) return null;

    return mapPostDocumentToPostEntity(post);
  }

  async getPost(id: ID) {
    const post = await PostModel.findById(id);

    return this.mapPostWithFallback(post);
  }

  async getPosts(ids: ID[]): Promise<Array<PostEntity>> {
    const postsQuery = await PostModel.find().exec();

    const result = postsQuery.filter(({ id }) => ids.includes(id));

    return result.map(mapPostDocumentToPostEntity);
  }

  async getAllPosts(): Promise<Array<PostEntity>> {
    return await PostModel.find().exec();
  }

  async getPostsByAuthor(authorId: ID): Promise<(PostEntity | null)[]> {
    const posts = await PostModel.find({ author: authorId }).exec();

    return posts.map((el) => this.mapPostWithFallback(el));
  }

  async createPost(authorId: ID, textContent: string): Promise<PostEntity> {
    const newPost = PostEntityController.createPostEntity(
      authorId,
      textContent,
    );

    const createdPost = await PostModel.create(newPost);

    await createdPost.save();

    return mapPostDocumentToPostEntity(createdPost);
  }
}

const postModelController = new PostModelController();

export default postModelController;
