// types
import { PostEntity } from '../../../models/Post';
import { PostResolvers } from '../../../types/gql.generated';

// controllers
import { UserController } from '../../../controllers/User';
import { post } from '@typegoose/typegoose';
import UserModel from '../../../models/User';

const postResolvers: PostResolvers = {
  id: (post: PostEntity) => post._id,
  author: async (post: PostEntity) => {
    const author = await UserController.getUser(post.author);

    if (!author) throw new Error('author missed'); // TODO: provide useful errors

    return author;
  },
  likes: (post: PostEntity) => {
    const likes = post.likes.map(async (userId) => {
      const user = await UserModel.findById(userId).exec();
      if (!user) {
        throw Error('user does not exist');
      }

      return user;
    });

    return Promise.all(likes);
  },
};

export default postResolvers;
