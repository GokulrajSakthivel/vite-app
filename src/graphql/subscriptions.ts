/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUsers = /* GraphQL */ `subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onCreateUsers(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateUsersSubscriptionVariables,
  APITypes.OnCreateUsersSubscription
>;
export const onUpdateUsers = /* GraphQL */ `subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onUpdateUsers(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateUsersSubscriptionVariables,
  APITypes.OnUpdateUsersSubscription
>;
export const onDeleteUsers = /* GraphQL */ `subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
  onDeleteUsers(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteUsersSubscriptionVariables,
  APITypes.OnDeleteUsersSubscription
>;
