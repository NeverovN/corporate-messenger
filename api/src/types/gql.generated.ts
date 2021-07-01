import { GraphQLResolveInfo } from 'graphql';
import { UserEntity } from '../models/User/index';
import { PostEntity } from '../models/Post/index';
import { ChatEntity } from '../models/Chat/index';
import { MessageEntity } from '../models/Message/index';
import { CommentEntity } from '../models/Comment/index';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  token: Scalars['String'];
  user: User;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID'];
  isDialog: Scalars['Boolean'];
  title: Scalars['String'];
  participants: Array<Maybe<User>>;
  logo?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<Message>>>;
  settings?: Maybe<ChatSettings>;
};

export type ChatSettings = {
  __typename?: 'ChatSettings';
  testField?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  postId: Scalars['ID'];
  author: User;
  content: Scalars['String'];
  createdAt: Scalars['String'];
  lastEdit?: Maybe<Scalars['String']>;
  likes?: Maybe<Array<User>>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  content: Scalars['String'];
  author: User;
  chatId: Scalars['ID'];
  createdAt: Scalars['String'];
  lastEdit?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFriend?: Maybe<User>;
  createChat: Chat;
  createComment: Comment;
  createMessage: Message;
  createPost: Post;
  createUser: AuthenticationResult;
  deleteChatById: Chat;
  deleteCommentById: Comment;
  deleteMessageById: Message;
  editEmail: User;
  editMessage: Message;
  editPassword: User;
  editUsername: User;
  getUsersPosts?: Maybe<Array<Maybe<Post>>>;
  likeComment: Comment;
  login: AuthenticationResult;
  removeFriend?: Maybe<User>;
};


export type MutationAddFriendArgs = {
  friendId: Scalars['ID'];
};


export type MutationCreateChatArgs = {
  participants: Array<Scalars['ID']>;
  title: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  postId: Scalars['ID'];
  content: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  content: Scalars['String'];
  chatId: Scalars['String'];
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteChatByIdArgs = {
  chatId: Scalars['ID'];
};


export type MutationDeleteCommentByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMessageByIdArgs = {
  messageId: Scalars['ID'];
};


export type MutationEditEmailArgs = {
  newEmail: Scalars['String'];
};


export type MutationEditMessageArgs = {
  messageId: Scalars['ID'];
  newContent: Scalars['String'];
};


export type MutationEditPasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationEditUsernameArgs = {
  newFirstName: Scalars['String'];
  newLastName: Scalars['String'];
};


export type MutationLikeCommentArgs = {
  commentId: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveFriendArgs = {
  friendId: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  author: User;
  createdAt: Scalars['String'];
  lastEdit?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
};

export type Query = {
  __typename?: 'Query';
  getAllPosts?: Maybe<Array<Maybe<Post>>>;
  getChatById?: Maybe<Chat>;
  getChats?: Maybe<Array<Maybe<Chat>>>;
  getComment?: Maybe<Comment>;
  getFriendPosts?: Maybe<Array<Maybe<Post>>>;
  getPost?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getUser: User;
  getUserById?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetChatByIdArgs = {
  chatId: Scalars['ID'];
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostsArgs = {
  author?: Maybe<Scalars['ID']>;
};


export type QueryGetUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messageEdited: Message;
  newChat: Chat;
  newMessage: Message;
  newPost: Post;
};


export type SubscriptionMessageEditedArgs = {
  chatId: Scalars['ID'];
};


export type SubscriptionNewMessageArgs = {
  chatId: Scalars['ID'];
};

export type UpdatePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  friends: Array<User>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthenticationResult: ResolverTypeWrapper<Omit<AuthenticationResult, 'user'> & { user: ResolversTypes['User'] }>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Chat: ResolverTypeWrapper<ChatEntity>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ChatSettings: ResolverTypeWrapper<ChatSettings>;
  Comment: ResolverTypeWrapper<CommentEntity>;
  CreateUserInput: CreateUserInput;
  LoginInput: LoginInput;
  Message: ResolverTypeWrapper<MessageEntity>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<PostEntity>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  UpdatePasswordInput: UpdatePasswordInput;
  User: ResolverTypeWrapper<UserEntity>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticationResult: Omit<AuthenticationResult, 'user'> & { user: ResolversParentTypes['User'] };
  String: Scalars['String'];
  Chat: ChatEntity;
  ID: Scalars['ID'];
  Boolean: Scalars['Boolean'];
  ChatSettings: ChatSettings;
  Comment: CommentEntity;
  CreateUserInput: CreateUserInput;
  LoginInput: LoginInput;
  Message: MessageEntity;
  Mutation: {};
  Post: PostEntity;
  Query: {};
  Subscription: {};
  UpdatePasswordInput: UpdatePasswordInput;
  User: UserEntity;
};

export type AuthenticationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticationResult'] = ResolversParentTypes['AuthenticationResult']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDialog?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes['ChatSettings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatSettings'] = ResolversParentTypes['ChatSettings']> = {
  testField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastEdit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  chatId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastEdit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addFriend?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationAddFriendArgs, 'friendId'>>;
  createChat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType, RequireFields<MutationCreateChatArgs, 'participants' | 'title'>>;
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'postId' | 'content'>>;
  createMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'content' | 'chatId'>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  createUser?: Resolver<ResolversTypes['AuthenticationResult'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteChatById?: Resolver<ResolversTypes['Chat'], ParentType, ContextType, RequireFields<MutationDeleteChatByIdArgs, 'chatId'>>;
  deleteCommentById?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationDeleteCommentByIdArgs, 'id'>>;
  deleteMessageById?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationDeleteMessageByIdArgs, 'messageId'>>;
  editEmail?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationEditEmailArgs, 'newEmail'>>;
  editMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationEditMessageArgs, 'messageId' | 'newContent'>>;
  editPassword?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationEditPasswordArgs, 'input'>>;
  editUsername?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationEditUsernameArgs, 'newFirstName' | 'newLastName'>>;
  getUsersPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  likeComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationLikeCommentArgs, 'commentId'>>;
  login?: Resolver<ResolversTypes['AuthenticationResult'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  removeFriend?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRemoveFriendArgs, 'friendId'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastEdit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  getChatById?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<QueryGetChatByIdArgs, 'chatId'>>;
  getChats?: Resolver<Maybe<Array<Maybe<ResolversTypes['Chat']>>>, ParentType, ContextType>;
  getComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryGetCommentArgs, 'id'>>;
  getFriendPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  getPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'id'>>;
  getPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType, RequireFields<QueryGetPostsArgs, never>>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, never>>;
  getUserById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  messageEdited?: SubscriptionResolver<ResolversTypes['Message'], "messageEdited", ParentType, ContextType, RequireFields<SubscriptionMessageEditedArgs, 'chatId'>>;
  newChat?: SubscriptionResolver<ResolversTypes['Chat'], "newChat", ParentType, ContextType>;
  newMessage?: SubscriptionResolver<ResolversTypes['Message'], "newMessage", ParentType, ContextType, RequireFields<SubscriptionNewMessageArgs, 'chatId'>>;
  newPost?: SubscriptionResolver<ResolversTypes['Post'], "newPost", ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  friends?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticationResult?: AuthenticationResultResolvers<ContextType>;
  Chat?: ChatResolvers<ContextType>;
  ChatSettings?: ChatSettingsResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
