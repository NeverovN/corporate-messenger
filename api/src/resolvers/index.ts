import { Resolvers } from '../types/gql.generated';
import { UserController } from '../controllers/User';
import { PostController } from '../controllers/Post';
import { POST_CREATED } from '../consts/events';

import createToken from '../utils/createToken';
import createPasswordHash from '../utils/createPasswordHash';
import verifyPasswordHash from '../utils/verifyPasswordHash';
import { UserEntity } from '../models/User';

// types
import { ApolloContextType } from '../types/apollo';
import { withFilter } from 'graphql-subscriptions';
import { pubsub } from '../consts/pubsub';
import { PostEntity } from '../models/Post';

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
    async createPost(_, __, { currentUserId }: ApolloContextType) {
      if (!currentUserId) {
        throw Error('unlogged user');
      }

      const post = await PostController.createPost(currentUserId);

      pubsub.publish(POST_CREATED, post);

      return post;
    },
  },
  Query: {
    async getUserById(_, args) {
      return await UserController.getUser(args.id); // don't see principal difference between this query and getUser
    },
    async getPosts(_, __, { currentUserId }) {
      console.log(currentUserId);
      return await PostController.getPostsByAuthor(currentUserId);
    },
    async getAllPosts() {
      return await PostController.getAllPosts();
    },
    async getFriendPosts(_, __, { currentUserId }) {
      const friends = await UserController.getFriends(currentUserId);
      const feedFromEachUser = friends.map((user) =>
        PostController.getPostsByAuthor(user._id),
      );

      const feed = feedFromEachUser.reduce(async (acc, el) => {
        return [...acc, ...(await el)];
      }, [] as any);

      console.log(feed);

      return feed;
    },
    async getCurrentUser(_, __, { currentUserId }) {
      const user = await UserController.getUser(currentUserId);
      if (!user) {
        throw Error('unlogged user');
      }
      return user;
    },
  },
  Subscription: {
    newPost: {
      subscribe: withFilter(
        () => {
          console.log('subscribed for new post');
          return pubsub.asyncIterator([POST_CREATED]);
        },
        () => {
          // basing on true/false return decides, if resolve function should be called
          return true;
        },
      ),
      resolve: (post: PostEntity) => {
        return post;
      },
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
  Post: {
    id: (post: PostEntity) => post._id,
    author: async (post: PostEntity) => {
      const author = await UserController.getUser(post.author);

      if (!author) throw new Error('author missed'); // TODO: provide useful errors

      return author;
    },
  },
};

export default resolverMap;
