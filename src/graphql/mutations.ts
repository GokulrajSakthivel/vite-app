/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUsers = /* GraphQL */ `mutation CreateUsers(
  $input: CreateUsersInput!
  $condition: ModelUsersConditionInput
) {
  createUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUsersMutationVariables,
  APITypes.CreateUsersMutation
>;
export const updateUsers = /* GraphQL */ `mutation UpdateUsers(
  $input: UpdateUsersInput!
  $condition: ModelUsersConditionInput
) {
  updateUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUsersMutationVariables,
  APITypes.UpdateUsersMutation
>;
export const deleteUsers = /* GraphQL */ `mutation DeleteUsers(
  $input: DeleteUsersInput!
  $condition: ModelUsersConditionInput
) {
  deleteUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUsersMutationVariables,
  APITypes.DeleteUsersMutation
>;
export const createAddress = /* GraphQL */ `mutation CreateAddress(
  $input: CreateAddressInput!
  $condition: ModelAddressConditionInput
) {
  createAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAddressMutationVariables,
  APITypes.CreateAddressMutation
>;
export const updateAddress = /* GraphQL */ `mutation UpdateAddress(
  $input: UpdateAddressInput!
  $condition: ModelAddressConditionInput
) {
  updateAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAddressMutationVariables,
  APITypes.UpdateAddressMutation
>;
export const deleteAddress = /* GraphQL */ `mutation DeleteAddress(
  $input: DeleteAddressInput!
  $condition: ModelAddressConditionInput
) {
  deleteAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAddressMutationVariables,
  APITypes.DeleteAddressMutation
>;
export const createMaster = /* GraphQL */ `mutation CreateMaster(
  $input: CreateMasterInput!
  $condition: ModelMasterConditionInput
) {
  createMaster(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMasterMutationVariables,
  APITypes.CreateMasterMutation
>;
export const updateMaster = /* GraphQL */ `mutation UpdateMaster(
  $input: UpdateMasterInput!
  $condition: ModelMasterConditionInput
) {
  updateMaster(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMasterMutationVariables,
  APITypes.UpdateMasterMutation
>;
export const deleteMaster = /* GraphQL */ `mutation DeleteMaster(
  $input: DeleteMasterInput!
  $condition: ModelMasterConditionInput
) {
  deleteMaster(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMasterMutationVariables,
  APITypes.DeleteMasterMutation
>;
export const createMasterItem = /* GraphQL */ `mutation CreateMasterItem(
  $input: CreateMasterItemInput!
  $condition: ModelMasterItemConditionInput
) {
  createMasterItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMasterItemMutationVariables,
  APITypes.CreateMasterItemMutation
>;
export const updateMasterItem = /* GraphQL */ `mutation UpdateMasterItem(
  $input: UpdateMasterItemInput!
  $condition: ModelMasterItemConditionInput
) {
  updateMasterItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMasterItemMutationVariables,
  APITypes.UpdateMasterItemMutation
>;
export const deleteMasterItem = /* GraphQL */ `mutation DeleteMasterItem(
  $input: DeleteMasterItemInput!
  $condition: ModelMasterItemConditionInput
) {
  deleteMasterItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMasterItemMutationVariables,
  APITypes.DeleteMasterItemMutation
>;
