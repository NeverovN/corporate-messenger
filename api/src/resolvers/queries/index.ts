import { ApolloContextType } from '../../types/apollo';
import { QueryResolvers } from '../../types/gql.generated';

// controllers
import { UserController } from '../../controllers/User';
import { PostController } from '../../controllers/Post';
import { ChatController } from '../../controllers/Chat';
import { MessageController } from '../../controllers/Message';

const queryResolvers: QueryResolvers<ApolloContextType> = {
  async getUserById(_, args) {
    return await UserController.getUser(args.id); // don't see principal difference between this query and getUser
  },
  async getUsers() {
    return await UserController.getAllUsers();
  },
  async getPosts(_, args, { currentUserId }) {
    const id = args.author ? args.author : currentUserId;
    if (!id) throw Error('Unauthorized');

    return await PostController.getPostsByAuthor(id);
  },
  async getAllPosts() {
    return await PostController.getAllPosts();
  },
  async getChats(_, __, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    return await ChatController.getChats(currentUserId);
  },
  async getUser(_, args, { currentUserId }) {
    const id = args.id ? args.id : currentUserId;
    if (!id) throw Error('Unauthorized');

    const user = await UserController.getUser(id);
    if (!user) {
      throw Error('unauthorized user');
    }
    return user;
  },
  async getChatById(_, args, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    return await ChatController.getChat(args.chatId);
  },
  async getFriendPosts(_, __, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    const friends = await UserController.getFriends(currentUserId);

    const feed = await Promise.all(
      friends.map((user) => PostController.getPostsByAuthor(user._id)),
    );

    return feed.flat(); // TODO: check if it works correctly (maybe we have to use lodash or ramda or somethings else)
  },
  async getMessages(_, args) {
    return await MessageController.getChatMessages(args.chatId);
  },
};

export default queryResolvers;
