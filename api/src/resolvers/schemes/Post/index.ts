// types
import { PostEntity } from '../../../models/Post';
import { PostResolvers } from '../../../types/gql.generated';

// controllers
import { UserController } from '../../../controllers/User';

const postResolvers: PostResolvers = {
  id: (post: PostEntity) => post.id,
  author: async (post: PostEntity) => {
    const author = await UserController.getUser(post.author);

    if (!author) throw new Error('author missed'); // TODO: provide useful errors

    return author;
  },
};

export default postResolvers;
