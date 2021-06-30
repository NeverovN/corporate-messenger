// types
import { PostEntity } from '../../../models/Post';
import { PostResolvers } from '../../../types/gql.generated';

// controllers
import { UserController } from '../../../controllers/User';
import { post } from '@typegoose/typegoose';
import { PostController } from '../../../controllers/Post';

const postResolvers: PostResolvers = {
  id: (post: PostEntity) => post._id,
  author: async (post: PostEntity) => {
    const author = await UserController.getUser(post.author);

    if (!author) throw new Error('author missed'); // TODO: provide useful errors

    return author;
  },
  comments: async (post: PostEntity) => {
    return post.comments.map(
      async ({ author }) => await UserController.getUser(userId),
    );
  },
};

export default postResolvers;
