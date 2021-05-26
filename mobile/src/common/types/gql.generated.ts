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

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
};

export type CreateUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
<<<<<<< HEAD
};

export type InputPost = {
  username: Scalars['String'];
=======
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
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
  createUser?: Maybe<User>;
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
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getUserToken?: Maybe<AccessToken>;
};

export type QueryGetUserArgs = {
  token: Scalars['String'];
};

<<<<<<< HEAD
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
export type QueryGetUserTokenArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
};

export type User = {
  __typename?: 'User';
  guid: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
};

<<<<<<< HEAD
export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'guid' | 'username' | 'password'>
);

export type GetTokenQueryVariables = Exact<{
  token: Scalars['String'];
=======
export type UserFragmentFragment = { __typename?: 'User' } & Pick<
  User,
  'guid' | 'username' | 'password'
>;

export type GetTokenQueryVariables = Exact<{
  token: Scalars['String'];
}>;

export type GetTokenQuery = { __typename?: 'Query' } & {
  getUser?: Maybe<{ __typename?: 'User' } & UserFragmentFragment>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = { __typename?: 'Query' } & {
  getUsers?: Maybe<
    Array<Maybe<{ __typename?: 'User' } & UserFragmentFragment>>
  >;
};

export type GetUserTokenQueryVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
}>;

export type GetUserTokenQuery = { __typename?: 'Query' } & {
  getUserToken?: Maybe<
    { __typename?: 'AccessToken' } & Pick<AccessToken, 'accessToken'>
  >;
};

<<<<<<< HEAD
export type GetTokenQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);
=======
export type AddUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type AddUserMutation = { __typename?: 'Mutation' } & {
  createUser?: Maybe<{ __typename?: 'User' } & UserFragmentFragment>;
};
>>>>>>> f8aa6285597519089198893b77db21dd07436e80

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )>>> }
);

export type GetUserTokenQueryVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type GetUserTokenQuery = (
  { __typename?: 'Query' }
  & { getUserToken?: Maybe<(
    { __typename?: 'AccessToken' }
    & Pick<AccessToken, 'accessToken'>
  )> }
);

export type AddUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type PostFragmentFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'username' | 'comments'>
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { getPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & PostFragmentFragment
  )>>> }
);

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { getPost?: Maybe<(
    { __typename?: 'Post' }
    & PostFragmentFragment
  )> }
);

export type GetUsersPostsQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUsersPostsQuery = (
  { __typename?: 'Query' }
  & { getUsersPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'username' | 'id'>
  )>>> }
);

export type AddPostMutationVariables = Exact<{
  input: InputPost;
}>;


export type AddPostMutation = (
  { __typename?: 'Mutation' }
  & { addPost: (
    { __typename?: 'Post' }
    & PostFragmentFragment
  ) }
);

export const UserFragmentFragmentDoc = gql`
<<<<<<< HEAD
    fragment UserFragment on User {
  guid
  username
  password
}
    `;
export const PostFragmentFragmentDoc = gql`
    fragment PostFragment on Post {
  id
  username
  comments
}
    `;
export const GetTokenDocument = gql`
    query GetToken($token: String!) {
  getUser(token: $token) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetTokenQuery__
 *
 * To run a query within a React component, call `useGetTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetTokenQuery(baseOptions: Apollo.QueryHookOptions<GetTokenQuery, GetTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenQuery, GetTokenQueryVariables>(GetTokenDocument, options);
      }
export function useGetTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenQuery, GetTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenQuery, GetTokenQueryVariables>(GetTokenDocument, options);
        }
export type GetTokenQueryHookResult = ReturnType<typeof useGetTokenQuery>;
export type GetTokenLazyQueryHookResult = ReturnType<typeof useGetTokenLazyQuery>;
export type GetTokenQueryResult = Apollo.QueryResult<GetTokenQuery, GetTokenQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    ...UserFragment
=======
  fragment UserFragment on User {
    guid
    username
    password
  }
`;
export const GetTokenDocument = gql`
  query GetToken($token: String!) {
    getUser(token: $token) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useGetTokenQuery__
 *
 * To run a query within a React component, call `useGetTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetTokenQuery(
  baseOptions: Apollo.QueryHookOptions<GetTokenQuery, GetTokenQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTokenQuery, GetTokenQueryVariables>(
    GetTokenDocument,
    options,
  );
}
export function useGetTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTokenQuery,
    GetTokenQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTokenQuery, GetTokenQueryVariables>(
    GetTokenDocument,
    options,
  );
}
export type GetTokenQueryHookResult = ReturnType<typeof useGetTokenQuery>;
export type GetTokenLazyQueryHookResult = ReturnType<
  typeof useGetTokenLazyQuery
>;
export type GetTokenQueryResult = Apollo.QueryResult<
  GetTokenQuery,
  GetTokenQueryVariables
>;
export const GetUsersDocument = gql`
  query GetUsers {
    getUsers {
      ...UserFragment
    }
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const GetUserTokenDocument = gql`
  query GetUserToken($username: String!, $password: String!) {
    getUserToken(username: $username, password: $password) {
      accessToken
    }
  }
`;

/**
<<<<<<< HEAD
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
=======
 * __useGetUserTokenQuery__
 *
 * To run a query within a React component, call `useGetUserTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
<<<<<<< HEAD
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserTokenDocument = gql`
    query GetUserToken($username: String!, $password: String!) {
  getUserToken(username: $username, password: $password) {
    accessToken
  }
}
    `;

/**
 * __useGetUserTokenQuery__
 *
 * To run a query within a React component, call `useGetUserTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTokenQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useGetUserTokenQuery(baseOptions: Apollo.QueryHookOptions<GetUserTokenQuery, GetUserTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTokenQuery, GetUserTokenQueryVariables>(GetUserTokenDocument, options);
      }
export function useGetUserTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTokenQuery, GetUserTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTokenQuery, GetUserTokenQueryVariables>(GetUserTokenDocument, options);
        }
export type GetUserTokenQueryHookResult = ReturnType<typeof useGetUserTokenQuery>;
export type GetUserTokenLazyQueryHookResult = ReturnType<typeof useGetUserTokenLazyQuery>;
export type GetUserTokenQueryResult = Apollo.QueryResult<GetUserTokenQuery, GetUserTokenQueryVariables>;
export const AddUserDocument = gql`
    mutation AddUser($username: String!, $password: String!) {
  createUser(input: {username: $username, password: $password}) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;
=======
 * const { data, loading, error } = useGetUserTokenQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useGetUserTokenQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserTokenQuery,
    GetUserTokenQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserTokenQuery, GetUserTokenQueryVariables>(
    GetUserTokenDocument,
    options,
  );
}
export function useGetUserTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserTokenQuery,
    GetUserTokenQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserTokenQuery, GetUserTokenQueryVariables>(
    GetUserTokenDocument,
    options,
  );
}
export type GetUserTokenQueryHookResult = ReturnType<
  typeof useGetUserTokenQuery
>;
export type GetUserTokenLazyQueryHookResult = ReturnType<
  typeof useGetUserTokenLazyQuery
>;
export type GetUserTokenQueryResult = Apollo.QueryResult<
  GetUserTokenQuery,
  GetUserTokenQueryVariables
>;
export const AddUserDocument = gql`
  mutation AddUser($username: String!, $password: String!) {
    createUser(input: { username: $username, password: $password }) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type AddUserMutationFn = Apollo.MutationFunction<
  AddUserMutation,
  AddUserMutationVariables
>;
>>>>>>> f8aa6285597519089198893b77db21dd07436e80

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
<<<<<<< HEAD
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const GetPostsDocument = gql`
    query GetPosts {
  getPosts {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;

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
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($id: ID!) {
  getPost(id: $id) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetUsersPostsDocument = gql`
    query GetUsersPosts($username: String!) {
  getUsersPosts(username: $username) {
    username
    id
  }
}
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
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUsersPostsQuery(baseOptions: Apollo.QueryHookOptions<GetUsersPostsQuery, GetUsersPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersPostsQuery, GetUsersPostsQueryVariables>(GetUsersPostsDocument, options);
      }
export function useGetUsersPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersPostsQuery, GetUsersPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersPostsQuery, GetUsersPostsQueryVariables>(GetUsersPostsDocument, options);
        }
export type GetUsersPostsQueryHookResult = ReturnType<typeof useGetUsersPostsQuery>;
export type GetUsersPostsLazyQueryHookResult = ReturnType<typeof useGetUsersPostsLazyQuery>;
export type GetUsersPostsQueryResult = Apollo.QueryResult<GetUsersPostsQuery, GetUsersPostsQueryVariables>;
export const AddPostDocument = gql`
    mutation AddPost($input: InputPost!) {
  addPost(input: $input) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, options);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
=======
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserMutation,
    AddUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(
    AddUserDocument,
    options,
  );
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>;
>>>>>>> f8aa6285597519089198893b77db21dd07436e80
