import { withFilter } from 'graphql-subscriptions';
import { SubscriptionMessageEditedArgs } from '../../types/gql.generated';

// types
import { SubscriptionResolvers } from '../../types/gql.generated';
import { ChatEntity } from '../../models/Chat';
import { PostEntity } from '../../models/Post';
import { MessageEntity } from '../../models/Message';

// consts
import {
  CHAT_CREATED,
  CHAT_DELETED,
  MESSAGE_CREATED,
  POST_CREATED,
  MESSAGE_EDITED,
} from '../../consts/events';

// services
import { pubsub } from '../../services/pubsub';

const subscriptionResolvers: SubscriptionResolvers = {
  newPost: {
    subscribe: withFilter(
      () => {
        return pubsub.asyncIterator([POST_CREATED]);
      },
      () => true,
    ),
    resolve: (post: PostEntity) => post,
  },
  newChat: {
    subscribe: () => pubsub.asyncIterator([CHAT_CREATED]),
    resolve: (chat: ChatEntity) => chat,
  },
  chatDeleted: {
    subscribe: () => pubsub.asyncIterator([CHAT_DELETED]),
    resolve: (chat: ChatEntity) => chat,
  },
  newMessage: {
    subscribe: withFilter(
      () => pubsub.asyncIterator([MESSAGE_CREATED]),
      // currentUserId is null always (can't fix it)
      (message: MessageEntity, _, { currentUser }) => {
        return message.author !== currentUser;
      },
    ),

    resolve: (message: MessageEntity) => message,
  },
  messageEdited: {
    subscribe: withFilter(
      () => pubsub.asyncIterator([MESSAGE_EDITED]),
      (message: MessageEntity, variables: SubscriptionMessageEditedArgs) =>
        message.chatId === variables.chatId,
    ),

    resolve: (message: MessageEntity) => message,
  },
};

export default subscriptionResolvers;
