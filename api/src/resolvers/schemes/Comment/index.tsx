// types
import { CommentEntity } from '../../../models/Comment';
import { CommentResolvers } from '../../../types/gql.generated';

// controllers
import { UserController } from '../../../controllers/User';
import UserModel from '../../../models/User';
import { mapUserDocumentToUserEntity } from '../../../models/User/mappers';

const commentResolvers: CommentResolvers = {
  id: (comment: CommentEntity) => comment._id,
  author: async (comment: CommentEntity) => {
    const author = await UserController.getUser(comment.author);

    if (!author) throw new Error('author missed'); // TODO: provide useful errors

    return author;
  },
  likes: async (comment: CommentEntity) => {
    const likes = comment.likes.map(async (userId) => {
      const user = await UserModel.findById(userId).exec();
      if (!user) {
        throw Error('user does not exist');
      }

      return mapUserDocumentToUserEntity(user);
    });
    return await Promise.all(likes);
  },
};

export default commentResolvers;
