import { Resolvers } from '../types/gql.generated';
import { UserController } from '../controllers/User';
import { PostController } from '../controllers/Post';
import { ChatController } from '../controllers/Chat';
import { POST_CREATED, CHAT_CREATED, MESSAGE_CREATED } from '../consts/events';

import createToken from '../utils/createToken';
import createPasswordHash from '../utils/createPasswordHash';
import verifyPasswordHash from '../utils/verifyPasswordHash';
import { UserEntity } from '../models/User';

// types
import { ApolloContextType } from '../types/apollo';
import { withFilter } from 'graphql-subscriptions';
import { pubsub } from '../consts/pubsub';
import { PostEntity } from '../models/Post';
import { ChatEntity } from '../models/Chat';
import { MessageEntity } from '../models/Message';
import { MessageController } from '../controllers/Message';

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
    async createChat(_, __, { currentUserId }) {
      const newChat = await ChatController.createChat([currentUserId]);
      console.log(pubsub);

      pubsub.publish(CHAT_CREATED, newChat);
      console.log(pubsub);

      return newChat;
    },
    async createMessage(_, args, { currentUserId }) {
      const newMessage = await MessageController.createMessage(
        currentUserId,
        [
          currentUserId, // just for now because there is no receivers link setup
        ],
        args.content,
      );
      const currChat = await ChatController.getChat(args.chatId);

      currChat?.messages.push({
        _id: newMessage._id,
        author: newMessage.author,
      });

      pubsub.publish(MESSAGE_CREATED, { newMessage: { msg: newMessage } });
      return newMessage;
    },
  },
  Query: {
    async getUserById(_, args) {
      return await UserController.getUser(args.id);
    },
    async getPosts(_, __, { currentUserId }) {
      return await PostController.getPostsByAuthor(currentUserId);
    },
    async getChats(_, __, { currentUserId }) {
      return await ChatController.getChats(currentUserId);
    },
    async getMessages(_, __, { currentUserId }) {
      return await MessageController.getMessagesByAuthor(currentUserId);
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
    newChat: {
      subscribe: () => pubsub.asyncIterator([CHAT_CREATED]),
      resolve: (chat: ChatEntity) => {
        console.log(chat);
        return chat;
      },
    },
    newMessage: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_CREATED]),

      resolve: ({ newMessage }: MSGPayloadType) => {
        return newMessage.msg;
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
  Chat: {
    id: (chat: ChatEntity) => chat._id,
    participants: async (chat: ChatEntity) =>
      await ChatController.getParticipants(chat),
    messages: async (chat: ChatEntity) => {
      return await ChatController.getMessages(chat);
    },
  },
  Message: {
    id: (msg: MessageEntity) => msg._id,
    author: async (message: MessageEntity) => {
      const author = await UserController.getUser(message.author);

      if (!author) throw new Error('author missed'); // TODO: provide useful errors

      return author;
    },
    receivers: async (message: MessageEntity) => {
      return await MessageController.getReceivers(message);
    },
  },
};
export default resolverMap;

type MSGPayloadType = {
  newMessage: {
    msg: MessageEntity;
  };
};
