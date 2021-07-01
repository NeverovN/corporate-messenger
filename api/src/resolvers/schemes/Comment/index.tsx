// types
import { CommentEntity } from '../../../models/Comment';
import { CommentModelResolvers } from '../../../types/gql.generated';

// controllers
import { UserController } from '../../../controllers/User';
import { CommentController } from '../../../controllers/Comment';

const commentResolvers: CommentModelResolvers = {
  id: (comment: CommentEntity) => comment._id,
  author: async (comment: CommentEntity) => {
    const author = await UserController.getUser(comment.author);

    if (!author) throw new Error('author missed'); // TODO: provide useful errors

    return author;
  },
};

export default commentResolvers;
