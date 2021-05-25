import { Resolvers, User as UserGQL } from '../types/gql.generated';
import UserController from '../controllers/User';

import userResolvers from './User';
import { UserEntity } from '../models/User';
import createToken from '../utils/createToken';
import createPasswordHash from '../utils/createPasswordHash';
import verifyPasswordHash from '../utils/verifyPasswordHash';

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
    async login(_, { input }) {
      const user = await UserController.getUserByEmail(input.email);

      if (!user) throw Error("User wasn't found"); //! TODO: use Apollo Errors

      const isPasswordCorrect = await verifyPasswordHash(
        user.password,
        input.password,
      );

      if (!isPasswordCorrect) throw Error('Incorrect password'); //! TODO: use Apollo Errors

      const token = createToken(user._id);

      return { token: token, user: mapUserEntityToUserGQL(user) };
    },
    async createUser(_, { input }) {
      //! 1. validate (TODO)
      //* 2. create user (if valid) or throw error (if invalid)
      //* 3. generate token
      //* 4. return result

      const doesUserAlreadyExists = !!(await UserController.getUserByEmail(
        input.email,
      ));

      if (doesUserAlreadyExists) throw Error('User already exists'); //! TODO: use Apollo Errors

      const hashedPassword = await createPasswordHash(input.password);

      const user = await UserController.createUser(
        input.email,
        hashedPassword,
        input.firstName,
        input.lastName,
        null,
      );

      const token = createToken(user._id);

      return { token: token, user: mapUserEntityToUserGQL(user) };
    },
  },
  User: userResolvers,
};
export default resolverMap;
