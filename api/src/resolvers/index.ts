import { Resolvers } from '../types/gql.generated';

import mutationResolvers from './mutations';
import queryResolvers from './queries';
import subscriptionResolvers from './subscriptions';

import chatResolvers from './schemes/Chat';
import messageResolvers from './schemes/Message';
import postResolvers from './schemes/Post';
import userResolvers from './schemes/User';
import commentResolvers from './schemes/Comment';

const resolvers: Resolvers = {
  Mutation: mutationResolvers,
  Query: queryResolvers,
  Subscription: subscriptionResolvers,
  User: userResolvers,
  Chat: chatResolvers,
  Post: postResolvers,
  Message: messageResolvers,
  CommentModel: commentResolvers,
};

export default resolvers;
