import { ApolloContextType } from '../../types/apollo';
import { MutationResolvers } from '../../types/gql.generated';

// controllers
import { UserController } from '../../controllers/User';
import { PostController } from '../../controllers/Post';
import { ChatController } from '../../controllers/Chat';
import { MessageController } from '../../controllers/Message';

// utils
import verifyPasswordHash from '../../utils/verifyPasswordHash';
import createToken from '../../utils/createToken';
import createPasswordHash from '../../utils/createPasswordHash';

// consts
import {
  CHAT_CREATED,
  MESSAGE_CREATED,
  POST_CREATED,
  MESSAGE_EDITED,
} from '../../consts/events';

// services
import { pubsub } from '../../services/pubsub';

const mutationResolvers: MutationResolvers<ApolloContextType> = {
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
      throw Error('unauthorized user');
    }

    const post = await PostController.createPost(currentUserId);

    pubsub.publish(POST_CREATED, post);

    return post;
  },
  async createChat(_, args, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    const newChat = await ChatController.createChat([
      currentUserId,
      ...args.participants,
    ]);

    pubsub.publish(CHAT_CREATED, newChat);

    return newChat;
  },
  async deleteChatById(_, args) {
    try {
      const deletedChat = await ChatController.getChat(args.chatId);
      await ChatController.deleteChat(args.chatId);
      return deletedChat;
    } catch (error) {
      throw Error(`${error}`);
    }
  },
  async createMessage(_, args, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    const newMessage = await MessageController.createMessage(
      currentUserId,
      args.chatId,
      args.content,
    );

    pubsub.publish(MESSAGE_CREATED, newMessage);
    return newMessage;
  },
  async deleteMessageById(_, args) {
    try {
      const deletedMessage = await MessageController.getMessage(args.messageId);
      await MessageController.deleteMessage(args.messageId);
      return deletedMessage;
    } catch (error) {
      throw Error(`${error}`);
    }
  },
  async editMessage(_, args) {
    try {
      const editedMessage = await MessageController.editMessage(
        args.messageId,
        args.newContent,
      );

      pubsub.publish(MESSAGE_EDITED, editedMessage);

      return editedMessage;
    } catch (error) {
      throw Error(`${error}`);
    }
  },
};

export default mutationResolvers;
