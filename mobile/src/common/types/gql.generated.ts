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

export type CommentModel = {
  __typename?: 'CommentModel';
  id: Scalars['ID'];
  author: Scalars['ID'];
  createdAt: Scalars['String'];
  lastEdit?: Maybe<Scalars['String']>;
  likes?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  addFriend?: Maybe<User>;
  createPost: Post;
  createUser: AuthenticationResult;
  login: AuthenticationResult;
};

export type MutationAddFriendArgs = {
  input: AddFriendInput;
};

export type MutationCreatePostArgs = {
  token: Scalars['String'];
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  author: Scalars['ID'];
  createdAt: Scalars['String'];
  comments?: Maybe<Array<Maybe<CommentModel>>>;
};

export type Query = {
  __typename?: 'Query';
  getPost?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getUser?: Maybe<User>;
  getUserByEmail?: Maybe<User>;
  getUserById?: Maybe<User>;
  getUsersPosts?: Maybe<Array<Maybe<Post>>>;
};

export type QueryGetPostArgs = {
  id: Scalars['ID'];
};

export type QueryGetUserByEmailArgs = {
  email: Scalars['String'];
};

export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetUsersPostsArgs = {
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  friends: Array<Maybe<User>>;
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

export type GetUsersPostsQueryVariables = Exact<{
  token: Scalars['String'];
}>;

export type GetUsersPostsQuery = { __typename?: 'Query' } & {
  getUsersPosts?: Maybe<
    Array<Maybe<{ __typename?: 'Post' } & PostFragmentFragment>>
  >;
};

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = { __typename?: 'Query' } & {
  getUser?: Maybe<
    { __typename?: 'User' } & Pick<User, 'firstName' | 'lastName'>
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
export const PostFragmentFragmentDoc = gql`
  fragment PostFragment on Post {
    id
    author
    createdAt
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
export const CreatePostDocument = gql`
  mutation CreatePost($token: String!) {
    createPost(token: $token) {
      ...PostFragment
    }
  }
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
 *      token: // value for 'token'
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
export const GetUsersPostsDocument = gql`
  query GetUsersPosts($token: String!) {
    getUsersPosts(token: $token) {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useGetUsersPostsQuery__
 *
 * To run a query within a React component, call `useGetUsersPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersPostsQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
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
>;
export const GetUserDocument = gql`
  query GetUser {
    getUser {
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
>;
