import { withFilter } from 'graphql-subscriptions';

// types
import { SubscriptionResolvers } from '../../types/gql.generated';
import { ChatEntity } from '../../models/Chat';
import { PostEntity } from '../../models/Post';
import { MessageEntity } from '../../models/Message';

// consts
import {
  CHAT_CREATED,
  MESSAGE_CREATED,
  POST_CREATED,
} from '../../consts/events';

// services
import { pubsub } from '../../services/pubsub';

const subscriptionResolvers: SubscriptionResolvers = {
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
      return chat;
    },
  },
  newMessage: {
    subscribe: () => pubsub.asyncIterator([MESSAGE_CREATED]),

    resolve: (message: MessageEntity) => {
      return message;
    },
  },
};

export default subscriptionResolvers;
