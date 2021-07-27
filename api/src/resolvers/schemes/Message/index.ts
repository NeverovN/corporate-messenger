// types
import { MessageEntity } from '../../../models/Message';
import { MessageResolvers } from '../../../types/gql.generated';

// controllers
import { UserController } from '../../../controllers/User';

const messageResolvers: MessageResolvers = {
  id: (msg: MessageEntity) => msg._id,
  author: async (message: MessageEntity) => {
    const author = await UserController.getUser(message.author);

    if (!author) throw new Error('author missed'); // TODO: provide useful errors

    return author;
  },
  readBy: async (message: MessageEntity) =>
    UserController.getUsers(message.readBy),
  content: (message: MessageEntity) => ({
    text: message.text,
    media: message.media,
  }),
};

export default messageResolvers;
