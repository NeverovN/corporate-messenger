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

// consts
import { pubsub } from '../consts/pubsub';

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

      const token = createToken(user.id);

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

      const token = createToken(user.id);

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
        throw Error('unlogined user');
      }
      const author = await UserController.getUser(currentUserId);
      if (!author) {
        throw Error('user is missing');
      }
      const post = await PostController.createPost(author);

      pubsub.publish(POST_CREATED, {
        newPost: {
          ...post,
          author: author,
        },
      });
      return {
        ...post,
        author: author,
      };
    },
  },
  Query: {
    async getUserById(_, args) {
      return await UserController.getUser(args.id);
    },
    async getPosts(_, __, { currentUserId }) {
      return await PostController.getPostsByAuthor(currentUserId);
    },
  },
  Subscription: {
    newPost: {
      subscribe: withFilter(
        (_, __, { pubsub }) => {
          console.log('subscribed for new post');
          return pubsub.asyncIterator([POST_CREATED]);
        },
        (payload) => {
          console.log({
            ...payload.newPost.post,
            id: payload.newPost.post._id,
          });
          return { ...payload.newPost.post, id: payload.newPost.post._id };
        },
      ),
      // resolve: (payload: any) => {
      //   console.log('subscription resolved');
      //   console.log({ ...payload.newPost.post });
      //   return { ...payload.newPost.post, id: payload.newPost.post._id };
      // },
    },
  },
  User: {
    id: (user: UserEntity) => user.id,
    friends: async (user: UserEntity) => {
      const friendIds = user.friends;

      const friends = await UserController.getUsers(friendIds);

      const friendsIDs = friends.map((el) => el.id);

      return friendsIDs;
    },
  },
  Post: {
    // id: (post: PostEntity) => post._id, // i don't understand why it doesn't work
    // author: async (post) => {
    //   const authorDocument = await UserModel.findById(post.author).exec();
    //   if (!authorDocument) return null;
    //   const author = mapUserDocumentToUserEntity(authorDocument);
    //   return author;
    // },
  },
};
export default resolverMap;
