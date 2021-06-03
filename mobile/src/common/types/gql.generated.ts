import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddFriendInput = {
  friendId: Scalars['String'];
};

export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  token: Scalars['String'];
  user: User;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID'];
  participants: Array<Maybe<User>>;
  logo?: Maybe<Scalars['String']>;
  settings?: Maybe<ChatSettings>;
};

export type ChatSettings = {
  __typename?: 'ChatSettings';
  testField?: Maybe<Scalars['String']>;
};

export type CommentModel = {
  __typename?: 'CommentModel';
  id: Scalars['ID'];
  author: User;
  createdAt: Scalars['String'];
  lastEdit?: Maybe<Scalars['String']>;
  likes?: Maybe<Array<Maybe<User>>>;
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
  author: Scalars['ID'];
  receivers: Array<Scalars['ID']>;
  createdAt: Scalars['String'];
  lastEdit?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFriend?: Maybe<User>;
<<<<<<< HEAD
  createChat: Chat;
=======
  createMessage: Message;
>>>>>>> feature/messeges-setup
  createPost: Post;
  createUser: AuthenticationResult;
  getPost?: Maybe<Post>;
  getUsersPosts?: Maybe<Array<Maybe<Post>>>;
  login: AuthenticationResult;
};

export type MutationAddFriendArgs = {
  input: AddFriendInput;
};

<<<<<<< HEAD
=======
export type MutationCreateMessageArgs = {
  content: Scalars['String'];
};

export type MutationCreatePostArgs = {
  token: Scalars['String'];
};

>>>>>>> feature/messeges-setup
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

<<<<<<< HEAD
export type MutationGetPostArgs = {
  id: Scalars['ID'];
};

=======
>>>>>>> feature/messeges-setup
export type MutationLoginArgs = {
  input: LoginInput;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  author: User;
  createdAt: Scalars['String'];
  lastEdit?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<CommentModel>>>;
};

export type Query = {
  __typename?: 'Query';
<<<<<<< HEAD
  getChats?: Maybe<Array<Maybe<Chat>>>;
  getCurrentUser?: Maybe<User>;
=======
  getMessages?: Maybe<Array<Maybe<Message>>>;
>>>>>>> feature/messeges-setup
  getPost?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getUserById?: Maybe<User>;
};

export type QueryGetPostArgs = {
  id: Scalars['ID'];
};

<<<<<<< HEAD
=======
export type QueryGetUserByEmailArgs = {
  email: Scalars['String'];
};

>>>>>>> feature/messeges-setup
export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
};

<<<<<<< HEAD
export type Subscription = {
  __typename?: 'Subscription';
  newChat: Chat;
  newPost: Post;
=======
export type QueryGetUsersPostsArgs = {
  token: Scalars['String'];
>>>>>>> feature/messeges-setup
};

export type Subscription = {
  __typename?: 'Subscription';
  newMessage: Message;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  friends: Array<Maybe<Scalars['ID']>>;
};

export type UserFragmentFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'email'
>;

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'AuthenticationResult' } & Pick<
    AuthenticationResult,
    'token'
  > & { user: { __typename?: 'User' } & UserFragmentFragment };
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser: { __typename?: 'AuthenticationResult' } & Pick<
    AuthenticationResult,
    'token'
  > & { user: { __typename?: 'User' } & UserFragmentFragment };
};

<<<<<<< HEAD
export type PostFragmentFragment = { __typename?: 'Post' } & Pick<
  Post,
  'id' | 'createdAt'
> & { author: { __typename?: 'User' } & Pick<User, 'id'> };

export type CreatePostMutationVariables = Exact<{ [key: string]: never }>;

export type CreatePostMutation = { __typename?: 'Mutation' } & {
  createPost: { __typename?: 'Post' } & PostFragmentFragment;
};

export type NewPostSubscriptionVariables = Exact<{ [key: string]: never }>;

export type NewPostSubscription = { __typename?: 'Subscription' } & {
  newPost: { __typename?: 'Post' } & PostFragmentFragment;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>;
=======
export type MsgFragmentFragment = { __typename?: 'Message' } & Pick<
  Message,
  'id' | 'author' | 'receivers' | 'content'
>;

export type GetMessagesQueryVariables = Exact<{ [key: string]: never }>;

export type GetMessagesQuery = { __typename?: 'Query' } & {
  getMessages?: Maybe<
    Array<Maybe<{ __typename?: 'Message' } & MsgFragmentFragment>>
  >;
};

export type CreateMessageMutationVariables = Exact<{
  content: Scalars['String'];
}>;

export type CreateMessageMutation = { __typename?: 'Mutation' } & {
  createMessage: { __typename?: 'Message' } & MsgFragmentFragment;
};

export type NewMessageSubscriptionVariables = Exact<{ [key: string]: never }>;

export type NewMessageSubscription = { __typename?: 'Subscription' } & {
  newMessage: { __typename?: 'Message' } & MsgFragmentFragment;
};

export type PostFragmentFragment = { __typename?: 'Post' } & Pick<
  Post,
  'id' | 'author' | 'createdAt'
>;

export type CreatePostMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type CreatePostMutation = { __typename?: 'Mutation' } & {
  createPost: { __typename?: 'Post' } & PostFragmentFragment;
};
>>>>>>> feature/messeges-setup

export type GetPostsQuery = { __typename?: 'Query' } & {
  getPosts?: Maybe<
    Array<Maybe<{ __typename?: 'Post' } & PostFragmentFragment>>
  >;
};

<<<<<<< HEAD
export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = { __typename?: 'Query' } & {
  getCurrentUser?: Maybe<
    { __typename?: 'User' } & Pick<User, 'firstName' | 'lastName'>
=======
export type GetUsersPostsQuery = { __typename?: 'Query' } & {
  getUsersPosts?: Maybe<
    Array<Maybe<{ __typename?: 'Post' } & PostFragmentFragment>>
>>>>>>> feature/messeges-setup
  >;
};

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    firstName
    lastName
    email
  }
`;
<<<<<<< HEAD
export const PostFragmentFragmentDoc = gql`
  fragment PostFragment on Post {
    id
    createdAt
    author {
      id
    }
=======
export const MsgFragmentFragmentDoc = gql`
  fragment msgFragment on Message {
    id
    author
    receivers
    content
  }
`;
export const PostFragmentFragmentDoc = gql`
  fragment PostFragment on Post {
    id
    author
    createdAt
>>>>>>> feature/messeges-setup
  }
`;
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      token
      user {
        ...UserFragment
      }
<<<<<<< HEAD
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
=======
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const GetMessagesDocument = gql`
  query GetMessages {
    getMessages {
      ...msgFragment
    }
  }
  ${MsgFragmentFragmentDoc}
`;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMessagesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMessagesQuery,
    GetMessagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(
    GetMessagesDocument,
    options,
  );
}
export function useGetMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMessagesQuery,
    GetMessagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(
    GetMessagesDocument,
    options,
  );
}
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<
  typeof useGetMessagesLazyQuery
>;
export type GetMessagesQueryResult = Apollo.QueryResult<
  GetMessagesQuery,
  GetMessagesQueryVariables
>;
export const CreateMessageDocument = gql`
  mutation CreateMessage($content: String!) {
    createMessage(content: $content) {
      ...msgFragment
    }
  }
  ${MsgFragmentFragmentDoc}
`;
export type CreateMessageMutationFn = Apollo.MutationFunction<
  CreateMessageMutation,
  CreateMessageMutationVariables
>>>>>>> feature/messeges-setup
>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
<<<<<<< HEAD
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const CreatePostDocument = gql`
  mutation CreatePost {
    createPost {
      ...PostFragment
    }
  }
=======
export function useCreateMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >(CreateMessageDocument, options);
}
export type CreateMessageMutationHookResult = ReturnType<
  typeof useCreateMessageMutation
>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;
export const NewMessageDocument = gql`
  subscription NewMessage {
    newMessage {
      ...msgFragment
    }
  }
  ${MsgFragmentFragmentDoc}
`;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewMessageSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    NewMessageSubscription,
    NewMessageSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    NewMessageSubscription,
    NewMessageSubscriptionVariables
  >(NewMessageDocument, options);
}
export type NewMessageSubscriptionHookResult = ReturnType<
  typeof useNewMessageSubscription
>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;
export const CreatePostDocument = gql`
  mutation CreatePost($token: String!) {
    createPost(token: $token) {
      ...PostFragment
    }
  }
>>>>>>> feature/messeges-setup
  ${PostFragmentFragmentDoc}
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options,
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
<<<<<<< HEAD
export const NewPostDocument = gql`
  subscription NewPost {
    newPost {
=======
export const GetUsersPostsDocument = gql`
  query GetUsersPosts($token: String!) {
    getUsersPosts(token: $token) {
>>>>>>> feature/messeges-setup
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;
<<<<<<< HEAD

/**
 * __useNewPostSubscription__
 *
 * To run a query within a React component, call `useNewPostSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewPostSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewPostSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewPostSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    NewPostSubscription,
    NewPostSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    NewPostSubscription,
    NewPostSubscriptionVariables
  >(NewPostDocument, options);
}
export type NewPostSubscriptionHookResult = ReturnType<
  typeof useNewPostSubscription
>;
export type NewPostSubscriptionResult = Apollo.SubscriptionResult<NewPostSubscription>;
export const GetPostsDocument = gql`
  query GetPosts {
    getPosts {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;
=======
>>>>>>> feature/messeges-setup

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
<<<<<<< HEAD
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options,
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options,
  );
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;
export type GetPostsQueryResult = Apollo.QueryResult<
  GetPostsQuery,
  GetPostsQueryVariables
>;
export const GetUserDocument = gql`
  query GetUser {
    getCurrentUser {
      firstName
      lastName
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
=======
export function useGetUsersPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUsersPostsQuery,
    GetUsersPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersPostsQuery, GetUsersPostsQueryVariables>(
    GetUsersPostsDocument,
    options,
  );
}
export function useGetUsersPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersPostsQuery,
    GetUsersPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersPostsQuery, GetUsersPostsQueryVariables>(
    GetUsersPostsDocument,
    options,
  );
}
export type GetUsersPostsQueryHookResult = ReturnType<
  typeof useGetUsersPostsQuery
>;
export type GetUsersPostsLazyQueryHookResult = ReturnType<
  typeof useGetUsersPostsLazyQuery
>;
export type GetUsersPostsQueryResult = Apollo.QueryResult<
  GetUsersPostsQuery,
  GetUsersPostsQueryVariables
>>>>>>> feature/messeges-setup
>;
