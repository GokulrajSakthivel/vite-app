/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUsers = /* GraphQL */ `query GetUsers($id: ID!) {
  getUsers(id: $id) {
    id
    email
    name
    addresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUsersQueryVariables, APITypes.GetUsersQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      email
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getAddress = /* GraphQL */ `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    id
    userID
    country
    phone
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAddressQueryVariables,
  APITypes.GetAddressQuery
>;
export const listAddresses = /* GraphQL */ `query ListAddresses(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      country
      phone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressesQueryVariables,
  APITypes.ListAddressesQuery
>;
export const syncAddresses = /* GraphQL */ `query SyncAddresses(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userID
      country
      phone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAddressesQueryVariables,
  APITypes.SyncAddressesQuery
>;
export const addressesByUserID = /* GraphQL */ `query AddressesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  addressesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      country
      phone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AddressesByUserIDQueryVariables,
  APITypes.AddressesByUserIDQuery
>;
