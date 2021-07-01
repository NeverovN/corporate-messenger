// types
import { PostEntity } from '../../../models/Post';
import { PostResolvers } from '../../../types/gql.generated';

// controllers
import { UserController } from '../../../controllers/User';
import { CommentController } from '../../../controllers/Comment';

const postResolvers: PostResolvers = {
  id: (post: PostEntity) => post._id,
  author: async (post: PostEntity) => {
    const author = await UserController.getUser(post.author);

    if (!author) throw new Error('author missed'); // TODO: provide useful errors

    return author;
  },
  comments: (post: PostEntity) => {
    return post.comments.map(async (id) => {
      const comment = await CommentController.getComment(id);
      if (!comment) {
        throw Error('comment does not exist');
      }

      return comment;
    });
  },
};

export default postResolvers;
