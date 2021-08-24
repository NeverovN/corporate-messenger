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
  CHAT_DELETED,
  MESSAGE_CREATED,
  POST_CREATED,
  MESSAGE_EDITED,
  MESSAGE_DELETED,
} from '../../consts/events';

// services
import { pubsub } from '../../services/pubsub';
import { CommentController } from '../../controllers/Comment';

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
  async editEmail(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }
    return await UserController.editEmail(currentUserId, args.newEmail);
  },
  async editPassword(_, { input }, { currentUserId }) {
    if (!currentUserId) {
      throw Error('unauthorized');
    }

    return await UserController.editPassword(
      currentUserId,
      input.oldPassword,
      input.newPassword,
    );
  },
  async editUsername(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }

    return await UserController.editUsername(
      currentUserId,
      args.newFirstName,
      args.newLastName,
    );
  },
  async updateAvatar(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }

    return await UserController.updateAvatar(
      currentUserId,
      args.avatarId || null,
    );
  },
  async addFriend(_, args, { currentUserId }) {
    // TODO: handle unauthorized access
    if (!currentUserId) throw new Error('Unauthorized Access');

    // TODO: handle model controller issues
    const newUser = await UserController.addFriend(
      currentUserId,
      args.friendId,
    );

    return newUser;
  },
  async removeFriend(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw Error('unauthorized user');
    }

    const removedFriend = await UserController.removeFriend(
      currentUserId,
      args.friendId,
    );

    return removedFriend;
  },
  async createPost(_, args, { currentUserId }: ApolloContextType) {
    if (!currentUserId) {
      throw Error('unauthorized user');
    }

    const text = args.textContent ? args.textContent : null;
    // setup for future implementation
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const media = args.mediaContent?.length ? args.mediaContent : null;

    const post = await PostController.createPost(currentUserId, text, media);

    pubsub.publish(POST_CREATED, post);

    return post;
  },
  async editPost(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw new Error('Unauthorized');
    }

    return PostController.editPost(
      currentUserId,
      args.postId,
      args.textContent,
      args.mediaContent,
    );
  },
  async deletePostById(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw new Error('Unauthorized');
    }

    return await PostController.deletePost(args.postId, currentUserId);
  },
  async toggleLike(_, args, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    const post = PostController.toggleLike(args.id, currentUserId);

    return post;
  },
  async createComment(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }

    const newComment = await CommentController.createComment(
      currentUserId,
      args.postId,
      args.content,
    );

    return newComment;
  },
  async editComment(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw new Error('Unauthorized');
    }

    return CommentController.editComment(args.commentId, args.textContent);
  },
  async likeComment(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }
    return await CommentController.like(currentUserId, args.commentId);
  },
  async deleteCommentById(_, args) {
    return CommentController.deleteComment(args.id);
  },
  async createChat(_, { input }, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    const newChat = await ChatController.createChat(
      [currentUserId, ...input.participants],
      input.title || null,
    );

    pubsub.publish(CHAT_CREATED, newChat);

    return newChat;
  },
  async createDialog(_, { input }, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }

    const newChat = await ChatController.createDialog([
      currentUserId,
      input.participant,
    ]);

    pubsub.publish(CHAT_CREATED, newChat);

    return newChat;
  },
  async editChatTitle(_, { input }, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }

    return ChatController.editChatTitle(input.chatId, input.newTitle);
  },
  async clearChatHistory(_, { chatId }, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }

    const success = await ChatController.clearHistory(chatId);
    if (!success) {
      throw Error('Error occurred, history was not cleared');
    }

    return await ChatController.getChat(chatId);
  },
  async leaveChat(_, { chatId }, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }

    return await ChatController.leaveChat(chatId, currentUserId);
  },
  async updateChatLogo(_, { input }, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }

    return await ChatController.updateChatLogo(
      input.chatId,
      input.logoId || null,
    );
  },
  async deleteChatById(_, args) {
    try {
      const deletedChat = await ChatController.getChat(args.chatId);
      await ChatController.deleteChat(args.chatId);

      pubsub.publish(CHAT_DELETED, deletedChat);

      return deletedChat;
    } catch (error) {
      throw Error(`${error}`);
    }
  },
  async createMessage(_, { input }, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    const newMessage = await MessageController.createMessage(
      currentUserId,
      input,
    );

    pubsub.publish(MESSAGE_CREATED, newMessage);

    return newMessage;
  },
  async deleteMessageById(_, args) {
    try {
      const deletedMessage = await MessageController.getMessage(args.messageId);
      await MessageController.deleteMessage(args.messageId);
      pubsub.publish(MESSAGE_DELETED, deletedMessage);

      return deletedMessage;
    } catch (error) {
      throw Error(`${error}`);
    }
  },
  async editMessage(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }
    try {
      const editedMessage = await MessageController.editMessage(
        currentUserId,
        args.messageId,
        args.newContent,
      );

      pubsub.publish(MESSAGE_EDITED, editedMessage);

      return editedMessage;
    } catch (error) {
      throw Error(`${error}`);
    }
  },
  async markRead(_, args, { currentUserId }) {
    if (!currentUserId) {
      throw Error('Unauthorized');
    }

    const readMsg = await MessageController.markRead(
      args.messageId,
      currentUserId,
    );

    pubsub.publish(MESSAGE_EDITED, readMsg);

    return readMsg;
  },
};

export default mutationResolvers;
