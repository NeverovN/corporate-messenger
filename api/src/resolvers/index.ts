import { Resolvers } from '../types/gql.generated';
import { UserController } from '../controllers/User';
import { PostController } from '../controllers/Post';

import createToken from '../utils/createToken';
import createPasswordHash from '../utils/createPasswordHash';
import verifyPasswordHash from '../utils/verifyPasswordHash';
import decodeToken from '../utils/decodeToken';
import { UserEntity } from '../models/User';
import { ApolloContextType } from '../types/apollo';
import { EnvConstants } from '../consts/env';

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

      return { token, user };
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

      return { token: token, user };
    },
    async addFriend(_, { input }, context: ApolloContextType) {
      // TODO: handle unauthorized access
      if (!context.currentUserId) throw new Error('Unauthorized Access');

      // TODO: handle model controller issues
      const newUser = await UserController.addFriend(
        context.currentUserId,
        input.friendId,
      );

      return newUser;
    },
    async createPost(_, { token }) {
      const { userId } = decodeToken(token);
      const post = await PostController.createPost(userId);
      return post;
    },
  },
  Query: {
    async getUserByEmail(_, { email }) {
      return await UserController.getUserByEmail(email);
    },
    async getUserById(_, args) {
      return await UserController.getUser(args.id);
    },
    async getUsersPosts(_, { token }) {
      const { userId } = decodeToken(token);
      const posts = PostController.getPostsByAuthor(userId);
      return posts;
    },
  },
  User: {
    id: (user: UserEntity) => user._id,
    friends: async (user: UserEntity) => {
      const friendIds = user.friends;

      const friends = await UserController.getUsers(friendIds);

      return friends;
    },
  },
};
export default resolverMap;
