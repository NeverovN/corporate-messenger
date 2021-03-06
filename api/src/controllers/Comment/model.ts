import { ID } from '../../types/common';

import CommentModel, { CommentEntity } from '../../models/Comment';
import { CommentDocument } from '../../models/Comment/types';

import { mapCommentDocumentToCommentEntity } from '../../models/Comment/mappers';
import CommentEntityController from './entity';

class CommentModelController {
  private mapCommentWithFallback(
    comment: CommentDocument | null,
  ): CommentEntity | null {
    if (!comment) return null;

    return mapCommentDocumentToCommentEntity(comment);
  }

  async getComment(id: ID) {
    const post = await CommentModel.findById(id);

    return this.mapCommentWithFallback(post);
  }

  async getComments(ids: ID[]): Promise<Array<CommentEntity>> {
    const commentQuery = await CommentModel.find().exec();

    const result = commentQuery.filter(({ id }) => ids.includes(id));

    return result.map(mapCommentDocumentToCommentEntity);
  }

  async getAllComments(): Promise<Array<CommentEntity>> {
    return await CommentModel.find().exec();
  }

  async getCommentsByAuthor(authorId: ID): Promise<(CommentEntity | null)[]> {
    const comments = await CommentModel.find({ author: authorId }).exec();

    return comments.map((el) => this.mapCommentWithFallback(el));
  }

  async createComment(
    authorId: ID,
    postId: ID,
    content: string,
  ): Promise<CommentEntity> {
    const newComment = CommentEntityController.createCommentEntity(
      authorId,
      postId,
      content,
    );

    const createdComment = await CommentModel.create(newComment);

    await createdComment.save();

    return mapCommentDocumentToCommentEntity(createdComment);
  }

  async like(authorId: ID, commentId: ID) {
    const comment = await CommentModel.findById(commentId).exec();

    if (!comment) {
      throw Error('comment not found');
    }

    const updatedCommentEntity = CommentEntityController.like(
      mapCommentDocumentToCommentEntity(comment),
      authorId,
    );

    await CommentModel.findByIdAndUpdate(commentId, updatedCommentEntity);
    const newComment = await CommentModel.findById(commentId).exec();

    if (!newComment) {
      throw Error('update failed');
    }

    return newComment;
  }

  async getCommentsByPostId(postId: ID): Promise<CommentEntity[]> {
    const comments = await CommentModel.find({ postId }).exec();

    return comments.map(mapCommentDocumentToCommentEntity);
  }

  async deleteComment(commentId: ID): Promise<CommentEntity> {
    const comment = await CommentModel.findByIdAndDelete(commentId).exec();

    if (!comment) {
      throw Error('unsuccessful deletion');
    }

    return comment;
  }

  async deleteComments(postId: ID): Promise<boolean> {
    try {
      await CommentModel.deleteMany({ postId });
      return true;
    } catch (error) {
      throw Error(`${error}`);
    }
  }

  async editComment(
    commentId: ID,
    textContent: string,
  ): Promise<CommentEntity> {
    const comment = await CommentModel.findById(commentId).exec();

    if (!comment) {
      throw new Error('Comment not found');
    }

    const newComment = CommentEntityController.edit(
      mapCommentDocumentToCommentEntity(comment),
      textContent,
    );

    await CommentModel.findByIdAndUpdate(commentId, newComment);
    const updatedComment = await CommentModel.findById(commentId).exec();

    if (!updatedComment) {
      throw new Error('Network error');
    }

    return mapCommentDocumentToCommentEntity(updatedComment);
  }
}

const commentModelController = new CommentModelController();

export default commentModelController;
