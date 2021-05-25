import { Resolvers, User as UserGQL } from '../types/gql.generated';
import UserController from '../controllers/User';

import userResolvers from './User';
import { UserEntity } from '../models/User';

function mapUserEntityToUserGQL(user: UserEntity): UserGQL {
  return {
    id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    // friends: user.friends,
    avatar: user.avatar,
    // settings: user.settings,
  };
}

const resolverMap: Resolvers = {
  Mutation: {
    async createUser(_, { input }) {
      // 1. validate
      // 2. create user (if valid) or throw error (if invalid)
      // 3. generate token
      // 4. return result

      const user = await UserController.createUser(
        input.email,
        input.password,
        'A',
        'B',
        null,
      );

      return { token: 'token', user: mapUserEntityToUserGQL(user) };
    },
  },
  User: userResolvers,
};
export default resolverMap;
