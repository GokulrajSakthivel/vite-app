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
` as GeneratedSubscription<
  APITypes.OnCreateUsersSubscriptionVariables,
  APITypes.OnCreateUsersSubscription
>;
export const onUpdateUsers = /* GraphQL */ `subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onUpdateUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUsersSubscriptionVariables,
  APITypes.OnUpdateUsersSubscription
>;
export const onDeleteUsers = /* GraphQL */ `subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
  onDeleteUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUsersSubscriptionVariables,
  APITypes.OnDeleteUsersSubscription
>;
export const onCreateAddress = /* GraphQL */ `subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onCreateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAddressSubscriptionVariables,
  APITypes.OnCreateAddressSubscription
>;
export const onUpdateAddress = /* GraphQL */ `subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onUpdateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAddressSubscriptionVariables,
  APITypes.OnUpdateAddressSubscription
>;
export const onDeleteAddress = /* GraphQL */ `subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
  onDeleteAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAddressSubscriptionVariables,
  APITypes.OnDeleteAddressSubscription
>;
export const onCreateMaster = /* GraphQL */ `subscription OnCreateMaster($filter: ModelSubscriptionMasterFilterInput) {
  onCreateMaster(filter: $filter) {
    id
    masterTitle
    categoryName
    masterName
    masterDescription
    displayOrder
    isActive
    items {
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
` as GeneratedSubscription<
  APITypes.OnCreateMasterSubscriptionVariables,
  APITypes.OnCreateMasterSubscription
>;
export const onUpdateMaster = /* GraphQL */ `subscription OnUpdateMaster($filter: ModelSubscriptionMasterFilterInput) {
  onUpdateMaster(filter: $filter) {
    id
    masterTitle
    categoryName
    masterName
    masterDescription
    displayOrder
    isActive
    items {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMasterSubscriptionVariables,
  APITypes.OnUpdateMasterSubscription
>;
export const onDeleteMaster = /* GraphQL */ `subscription OnDeleteMaster($filter: ModelSubscriptionMasterFilterInput) {
  onDeleteMaster(filter: $filter) {
    id
    masterTitle
    categoryName
    masterName
    masterDescription
    displayOrder
    isActive
    items {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMasterSubscriptionVariables,
  APITypes.OnDeleteMasterSubscription
>;
export const onCreateMasterItem = /* GraphQL */ `subscription OnCreateMasterItem(
  $filter: ModelSubscriptionMasterItemFilterInput
) {
  onCreateMasterItem(filter: $filter) {
    masterID
    id
    itemName
    itemType
    itemAttributes
    mastercode
    displayOrder
    isActive
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMasterItemSubscriptionVariables,
  APITypes.OnCreateMasterItemSubscription
>;
export const onUpdateMasterItem = /* GraphQL */ `subscription OnUpdateMasterItem(
  $filter: ModelSubscriptionMasterItemFilterInput
) {
  onUpdateMasterItem(filter: $filter) {
    masterID
    id
    itemName
    itemType
    itemAttributes
    mastercode
    displayOrder
    isActive
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMasterItemSubscriptionVariables,
  APITypes.OnUpdateMasterItemSubscription
>;
export const onDeleteMasterItem = /* GraphQL */ `subscription OnDeleteMasterItem(
  $filter: ModelSubscriptionMasterItemFilterInput
) {
  onDeleteMasterItem(filter: $filter) {
    masterID
    id
    itemName
    itemType
    itemAttributes
    mastercode
    displayOrder
    isActive
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMasterItemSubscriptionVariables,
  APITypes.OnDeleteMasterItemSubscription
>;
