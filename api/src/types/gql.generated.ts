import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type Mutation = {
  __typename?: 'Mutation';
<<<<<<< HEAD
  addPost: Post;
  createUser?: Maybe<User>;
};


export type MutationAddPostArgs = {
  input: InputPost;
=======
  login: AuthenticationResult;
  createUser: AuthenticationResult;
};


export type MutationLoginArgs = {
  input: LoginInput;
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
<<<<<<< HEAD
  getPost?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getUser?: Maybe<User>;
  getUserToken?: Maybe<AccessToken>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getUsersPosts?: Maybe<Array<Maybe<Post>>>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  token: Scalars['String'];
};


export type QueryGetUserTokenArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type QueryGetUsersPostsArgs = {
  username: Scalars['String'];
=======
  getUserById?: Maybe<User>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
};

export type User = {
  __typename?: 'User';
<<<<<<< HEAD
  guid: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
=======
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
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
<<<<<<< HEAD
  AccessToken: ResolverTypeWrapper<AccessToken>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateUserInput: CreateUserInput;
  InputPost: InputPost;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
=======
  AuthenticationResult: ResolverTypeWrapper<AuthenticationResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateUserInput: CreateUserInput;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
<<<<<<< HEAD
  AccessToken: AccessToken;
  String: Scalars['String'];
  CreateUserInput: CreateUserInput;
  InputPost: InputPost;
  Mutation: {};
  Post: Post;
  ID: Scalars['ID'];
=======
  AuthenticationResult: AuthenticationResult;
  String: Scalars['String'];
  CreateUserInput: CreateUserInput;
  LoginInput: LoginInput;
  Mutation: {};
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
  Query: {};
  User: User;
  ID: Scalars['ID'];
  Boolean: Scalars['Boolean'];
};

<<<<<<< HEAD
export type AccessTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessToken'] = ResolversParentTypes['AccessToken']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
=======
export type AuthenticationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticationResult'] = ResolversParentTypes['AuthenticationResult']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
<<<<<<< HEAD
  addPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationAddPostArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'id'>>;
  getPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'token'>>;
  getUserToken?: Resolver<Maybe<ResolversTypes['AccessToken']>, ParentType, ContextType, RequireFields<QueryGetUserTokenArgs, 'username' | 'password'>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  getUsersPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType, RequireFields<QueryGetUsersPostsArgs, 'username'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  guid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
=======
  login?: Resolver<ResolversTypes['AuthenticationResult'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['AuthenticationResult'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getUserById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
<<<<<<< HEAD
  AccessToken?: AccessTokenResolvers<ContextType>;
=======
  AuthenticationResult?: AuthenticationResultResolvers<ContextType>;
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
