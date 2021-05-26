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
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
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

export type QueryGetUserTokenArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  guid: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
};

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
}>;

export type GetUserTokenQuery = { __typename?: 'Query' } & {
  getUserToken?: Maybe<
    { __typename?: 'AccessToken' } & Pick<AccessToken, 'accessToken'>
  >;
};

export type AddUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type AddUserMutation = { __typename?: 'Mutation' } & {
  createUser?: Maybe<{ __typename?: 'User' } & UserFragmentFragment>;
};

export const UserFragmentFragmentDoc = gql`
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
