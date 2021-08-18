// types
import { UserEntity } from '../../../models/User';
import { UserResolvers } from '../../../types/gql.generated';

// controllers
import { UserController } from '../../../controllers/User';

const userResolvers: UserResolvers = {
  id: (user: UserEntity) => user._id,
  friends: async (user: UserEntity) => {
    const friendIds = user.friends;

    const friends = await UserController.getUsers(friendIds);

    return friends;
  },
};

export default userResolvers;
