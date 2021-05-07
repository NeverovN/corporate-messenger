import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getUserByGuid?: Maybe<User>;
};


export type QueryGetUserByGuidArgs = {
  guid: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  guid: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'guid' | 'firstName' | 'lastName'>
);

export type GetUserByGuidQueryVariables = Exact<{
  guid: Scalars['ID'];
}>;


export type GetUserByGuidQuery = (
  { __typename?: 'Query' }
  & { getUserByGuid?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  guid
  firstName
  lastName
}
    `;
export const GetUserByGuidDocument = gql`
    query GetUserByGuid($guid: ID!) {
  getUserByGuid(guid: $guid) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUserByGuidQuery__
 *
 * To run a query within a React component, call `useGetUserByGuidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByGuidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByGuidQuery({
 *   variables: {
 *      guid: // value for 'guid'
 *   },
 * });
 */
export function useGetUserByGuidQuery(baseOptions: Apollo.QueryHookOptions<GetUserByGuidQuery, GetUserByGuidQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByGuidQuery, GetUserByGuidQueryVariables>(GetUserByGuidDocument, options);
      }
export function useGetUserByGuidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByGuidQuery, GetUserByGuidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByGuidQuery, GetUserByGuidQueryVariables>(GetUserByGuidDocument, options);
        }
export type GetUserByGuidQueryHookResult = ReturnType<typeof useGetUserByGuidQuery>;
export type GetUserByGuidLazyQueryHookResult = ReturnType<typeof useGetUserByGuidLazyQuery>;
export type GetUserByGuidQueryResult = Apollo.QueryResult<GetUserByGuidQuery, GetUserByGuidQueryVariables>;