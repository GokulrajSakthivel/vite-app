/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
  id?: string | null,
  email: string,
  name?: string | null,
  _version?: number | null,
};

export type ModelUsersConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  email: string,
  name?: string | null,
  addresses?: ModelAddressConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  userID: string,
  country: string,
  phone: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUsersInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteUsersInput = {
  id: string,
  _version?: number | null,
};

export type CreateAddressInput = {
  id?: string | null,
  userID: string,
  country: string,
  phone: string,
  _version?: number | null,
};

export type ModelAddressConditionInput = {
  userID?: ModelIDInput | null,
  country?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAddressInput = {
  id: string,
  userID?: string | null,
  country?: string | null,
  phone?: string | null,
  _version?: number | null,
};

export type DeleteAddressInput = {
  id: string,
  _version?: number | null,
};

export type CreateMasterInput = {
  id?: string | null,
  masterTitle?: string | null,
  categoryName?: string | null,
  masterName?: string | null,
  masterDescription?: string | null,
  displayOrder?: number | null,
  isActive?: boolean | null,
  _version?: number | null,
};

export type ModelMasterConditionInput = {
  masterTitle?: ModelStringInput | null,
  categoryName?: ModelStringInput | null,
  masterName?: ModelStringInput | null,
  masterDescription?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  isActive?: ModelBooleanInput | null,
  and?: Array< ModelMasterConditionInput | null > | null,
  or?: Array< ModelMasterConditionInput | null > | null,
  not?: ModelMasterConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Master = {
  __typename: "Master",
  id: string,
  masterTitle?: string | null,
  categoryName?: string | null,
  masterName?: string | null,
  masterDescription?: string | null,
  displayOrder?: number | null,
  isActive?: boolean | null,
  items?: ModelMasterItemConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMasterItemConnection = {
  __typename: "ModelMasterItemConnection",
  items:  Array<MasterItem | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type MasterItem = {
  __typename: "MasterItem",
  masterID: string,
  id: string,
  itemName?: string | null,
  itemType?: string | null,
  itemAttributes?: Array< string | null > | null,
  mastercode?: string | null,
  displayOrder?: number | null,
  isActive?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMasterInput = {
  id: string,
  masterTitle?: string | null,
  categoryName?: string | null,
  masterName?: string | null,
  masterDescription?: string | null,
  displayOrder?: number | null,
  isActive?: boolean | null,
  _version?: number | null,
};

export type DeleteMasterInput = {
  id: string,
  _version?: number | null,
};

export type CreateMasterItemInput = {
  masterID: string,
  id?: string | null,
  itemName?: string | null,
  itemType?: string | null,
  itemAttributes?: Array< string | null > | null,
  mastercode?: string | null,
  displayOrder?: number | null,
  isActive?: boolean | null,
  _version?: number | null,
};

export type ModelMasterItemConditionInput = {
  itemName?: ModelStringInput | null,
  itemType?: ModelStringInput | null,
  itemAttributes?: ModelStringInput | null,
  mastercode?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  isActive?: ModelBooleanInput | null,
  and?: Array< ModelMasterItemConditionInput | null > | null,
  or?: Array< ModelMasterItemConditionInput | null > | null,
  not?: ModelMasterItemConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateMasterItemInput = {
  masterID: string,
  id: string,
  itemName?: string | null,
  itemType?: string | null,
  itemAttributes?: Array< string | null > | null,
  mastercode?: string | null,
  displayOrder?: number | null,
  isActive?: boolean | null,
  _version?: number | null,
};

export type DeleteMasterItemInput = {
  masterID: string,
  id: string,
  _version?: number | null,
};

export type CreatePtpTemplateDefInput = {
  id?: string | null,
  templateName: string,
  ptpoptions?: PtpOptionsInfoInput | null,
  isTemplateUsed?: string | null,
  isActive?: boolean | null,
  _version?: number | null,
};

export type PtpOptionsInfoInput = {
  requiredPermits?: Array< string | null > | null,
  requiredChecklist?: Array< string | null > | null,
  requiredPPE?: Array< string | null > | null,
  hazardandMeasures?: Array< HazardandMeasuresControlDefInput | null > | null,
};

export type HazardandMeasuresControlDefInput = {
  hazard?: string | null,
  hazardMeasures?: Array< string | null > | null,
};

export type ModelPtpTemplateDefConditionInput = {
  isTemplateUsed?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  and?: Array< ModelPtpTemplateDefConditionInput | null > | null,
  or?: Array< ModelPtpTemplateDefConditionInput | null > | null,
  not?: ModelPtpTemplateDefConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type PtpTemplateDef = {
  __typename: "PtpTemplateDef",
  id: string,
  templateName: string,
  ptpoptions?: PtpOptionsInfo | null,
  isTemplateUsed?: string | null,
  isActive?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type PtpOptionsInfo = {
  __typename: "PtpOptionsInfo",
  requiredPermits?: Array< string | null > | null,
  requiredChecklist?: Array< string | null > | null,
  requiredPPE?: Array< string | null > | null,
  hazardandMeasures?:  Array<HazardandMeasuresControlDef | null > | null,
};

export type HazardandMeasuresControlDef = {
  __typename: "HazardandMeasuresControlDef",
  hazard?: string | null,
  hazardMeasures?: Array< string | null > | null,
};

export type UpdatePtpTemplateDefInput = {
  id: string,
  templateName: string,
  ptpoptions?: PtpOptionsInfoInput | null,
  isTemplateUsed?: string | null,
  isActive?: boolean | null,
  _version?: number | null,
};

export type DeletePtpTemplateDefInput = {
  id: string,
  templateName: string,
  _version?: number | null,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  country?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMasterFilterInput = {
  id?: ModelIDInput | null,
  masterTitle?: ModelStringInput | null,
  categoryName?: ModelStringInput | null,
  masterName?: ModelStringInput | null,
  masterDescription?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  isActive?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMasterFilterInput | null > | null,
  or?: Array< ModelMasterFilterInput | null > | null,
  not?: ModelMasterFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMasterConnection = {
  __typename: "ModelMasterConnection",
  items:  Array<Master | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelMasterItemFilterInput = {
  masterID?: ModelIDInput | null,
  id?: ModelIDInput | null,
  itemName?: ModelStringInput | null,
  itemType?: ModelStringInput | null,
  itemAttributes?: ModelStringInput | null,
  mastercode?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  isActive?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMasterItemFilterInput | null > | null,
  or?: Array< ModelMasterItemFilterInput | null > | null,
  not?: ModelMasterItemFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPtpTemplateDefFilterInput = {
  id?: ModelIDInput | null,
  templateName?: ModelStringInput | null,
  isTemplateUsed?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPtpTemplateDefFilterInput | null > | null,
  or?: Array< ModelPtpTemplateDefFilterInput | null > | null,
  not?: ModelPtpTemplateDefFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPtpTemplateDefConnection = {
  __typename: "ModelPtpTemplateDefConnection",
  items:  Array<PtpTemplateDef | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  country?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMasterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  masterTitle?: ModelSubscriptionStringInput | null,
  categoryName?: ModelSubscriptionStringInput | null,
  masterName?: ModelSubscriptionStringInput | null,
  masterDescription?: ModelSubscriptionStringInput | null,
  displayOrder?: ModelSubscriptionIntInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMasterFilterInput | null > | null,
  or?: Array< ModelSubscriptionMasterFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionMasterItemFilterInput = {
  masterID?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  itemName?: ModelSubscriptionStringInput | null,
  itemType?: ModelSubscriptionStringInput | null,
  itemAttributes?: ModelSubscriptionStringInput | null,
  mastercode?: ModelSubscriptionStringInput | null,
  displayOrder?: ModelSubscriptionIntInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMasterItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionMasterItemFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPtpTemplateDefFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  templateName?: ModelSubscriptionStringInput | null,
  isTemplateUsed?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPtpTemplateDefFilterInput | null > | null,
  or?: Array< ModelSubscriptionPtpTemplateDefFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    name?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    name?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    name?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    country: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    country: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    country: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMasterMutationVariables = {
  input: CreateMasterInput,
  condition?: ModelMasterConditionInput | null,
};

export type CreateMasterMutation = {
  createMaster?:  {
    __typename: "Master",
    id: string,
    masterTitle?: string | null,
    categoryName?: string | null,
    masterName?: string | null,
    masterDescription?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    items?:  {
      __typename: "ModelMasterItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMasterMutationVariables = {
  input: UpdateMasterInput,
  condition?: ModelMasterConditionInput | null,
};

export type UpdateMasterMutation = {
  updateMaster?:  {
    __typename: "Master",
    id: string,
    masterTitle?: string | null,
    categoryName?: string | null,
    masterName?: string | null,
    masterDescription?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    items?:  {
      __typename: "ModelMasterItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMasterMutationVariables = {
  input: DeleteMasterInput,
  condition?: ModelMasterConditionInput | null,
};

export type DeleteMasterMutation = {
  deleteMaster?:  {
    __typename: "Master",
    id: string,
    masterTitle?: string | null,
    categoryName?: string | null,
    masterName?: string | null,
    masterDescription?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    items?:  {
      __typename: "ModelMasterItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMasterItemMutationVariables = {
  input: CreateMasterItemInput,
  condition?: ModelMasterItemConditionInput | null,
};

export type CreateMasterItemMutation = {
  createMasterItem?:  {
    __typename: "MasterItem",
    masterID: string,
    id: string,
    itemName?: string | null,
    itemType?: string | null,
    itemAttributes?: Array< string | null > | null,
    mastercode?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMasterItemMutationVariables = {
  input: UpdateMasterItemInput,
  condition?: ModelMasterItemConditionInput | null,
};

export type UpdateMasterItemMutation = {
  updateMasterItem?:  {
    __typename: "MasterItem",
    masterID: string,
    id: string,
    itemName?: string | null,
    itemType?: string | null,
    itemAttributes?: Array< string | null > | null,
    mastercode?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMasterItemMutationVariables = {
  input: DeleteMasterItemInput,
  condition?: ModelMasterItemConditionInput | null,
};

export type DeleteMasterItemMutation = {
  deleteMasterItem?:  {
    __typename: "MasterItem",
    masterID: string,
    id: string,
    itemName?: string | null,
    itemType?: string | null,
    itemAttributes?: Array< string | null > | null,
    mastercode?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePtpTemplateDefMutationVariables = {
  input: CreatePtpTemplateDefInput,
  condition?: ModelPtpTemplateDefConditionInput | null,
};

export type CreatePtpTemplateDefMutation = {
  createPtpTemplateDef?:  {
    __typename: "PtpTemplateDef",
    id: string,
    templateName: string,
    ptpoptions?:  {
      __typename: "PtpOptionsInfo",
      requiredPermits?: Array< string | null > | null,
      requiredChecklist?: Array< string | null > | null,
      requiredPPE?: Array< string | null > | null,
    } | null,
    isTemplateUsed?: string | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePtpTemplateDefMutationVariables = {
  input: UpdatePtpTemplateDefInput,
  condition?: ModelPtpTemplateDefConditionInput | null,
};

export type UpdatePtpTemplateDefMutation = {
  updatePtpTemplateDef?:  {
    __typename: "PtpTemplateDef",
    id: string,
    templateName: string,
    ptpoptions?:  {
      __typename: "PtpOptionsInfo",
      requiredPermits?: Array< string | null > | null,
      requiredChecklist?: Array< string | null > | null,
      requiredPPE?: Array< string | null > | null,
    } | null,
    isTemplateUsed?: string | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePtpTemplateDefMutationVariables = {
  input: DeletePtpTemplateDefInput,
  condition?: ModelPtpTemplateDefConditionInput | null,
};

export type DeletePtpTemplateDefMutation = {
  deletePtpTemplateDef?:  {
    __typename: "PtpTemplateDef",
    id: string,
    templateName: string,
    ptpoptions?:  {
      __typename: "PtpOptionsInfo",
      requiredPermits?: Array< string | null > | null,
      requiredChecklist?: Array< string | null > | null,
      requiredPPE?: Array< string | null > | null,
    } | null,
    isTemplateUsed?: string | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    name?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      email: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      email: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    country: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      userID: string,
      country: string,
      phone: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAddressesQuery = {
  syncAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      userID: string,
      country: string,
      phone: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMasterQueryVariables = {
  id: string,
};

export type GetMasterQuery = {
  getMaster?:  {
    __typename: "Master",
    id: string,
    masterTitle?: string | null,
    categoryName?: string | null,
    masterName?: string | null,
    masterDescription?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    items?:  {
      __typename: "ModelMasterItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMastersQueryVariables = {
  id?: string | null,
  filter?: ModelMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMastersQuery = {
  listMasters?:  {
    __typename: "ModelMasterConnection",
    items:  Array< {
      __typename: "Master",
      id: string,
      masterTitle?: string | null,
      categoryName?: string | null,
      masterName?: string | null,
      masterDescription?: string | null,
      displayOrder?: number | null,
      isActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMastersQueryVariables = {
  filter?: ModelMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMastersQuery = {
  syncMasters?:  {
    __typename: "ModelMasterConnection",
    items:  Array< {
      __typename: "Master",
      id: string,
      masterTitle?: string | null,
      categoryName?: string | null,
      masterName?: string | null,
      masterDescription?: string | null,
      displayOrder?: number | null,
      isActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMasterItemQueryVariables = {
  masterID: string,
  id: string,
};

export type GetMasterItemQuery = {
  getMasterItem?:  {
    __typename: "MasterItem",
    masterID: string,
    id: string,
    itemName?: string | null,
    itemType?: string | null,
    itemAttributes?: Array< string | null > | null,
    mastercode?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMasterItemsQueryVariables = {
  masterID?: string | null,
  id?: ModelIDKeyConditionInput | null,
  filter?: ModelMasterItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMasterItemsQuery = {
  listMasterItems?:  {
    __typename: "ModelMasterItemConnection",
    items:  Array< {
      __typename: "MasterItem",
      masterID: string,
      id: string,
      itemName?: string | null,
      itemType?: string | null,
      itemAttributes?: Array< string | null > | null,
      mastercode?: string | null,
      displayOrder?: number | null,
      isActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMasterItemsQueryVariables = {
  filter?: ModelMasterItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMasterItemsQuery = {
  syncMasterItems?:  {
    __typename: "ModelMasterItemConnection",
    items:  Array< {
      __typename: "MasterItem",
      masterID: string,
      id: string,
      itemName?: string | null,
      itemType?: string | null,
      itemAttributes?: Array< string | null > | null,
      mastercode?: string | null,
      displayOrder?: number | null,
      isActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPtpTemplateDefQueryVariables = {
  id: string,
  templateName: string,
};

export type GetPtpTemplateDefQuery = {
  getPtpTemplateDef?:  {
    __typename: "PtpTemplateDef",
    id: string,
    templateName: string,
    ptpoptions?:  {
      __typename: "PtpOptionsInfo",
      requiredPermits?: Array< string | null > | null,
      requiredChecklist?: Array< string | null > | null,
      requiredPPE?: Array< string | null > | null,
    } | null,
    isTemplateUsed?: string | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPtpTemplateDefsQueryVariables = {
  id?: string | null,
  templateName?: ModelStringKeyConditionInput | null,
  filter?: ModelPtpTemplateDefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPtpTemplateDefsQuery = {
  listPtpTemplateDefs?:  {
    __typename: "ModelPtpTemplateDefConnection",
    items:  Array< {
      __typename: "PtpTemplateDef",
      id: string,
      templateName: string,
      isTemplateUsed?: string | null,
      isActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPtpTemplateDefsQueryVariables = {
  filter?: ModelPtpTemplateDefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPtpTemplateDefsQuery = {
  syncPtpTemplateDefs?:  {
    __typename: "ModelPtpTemplateDefConnection",
    items:  Array< {
      __typename: "PtpTemplateDef",
      id: string,
      templateName: string,
      isTemplateUsed?: string | null,
      isActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AddressesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AddressesByUserIDQuery = {
  addressesByUserID?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      userID: string,
      country: string,
      phone: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    name?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    name?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    name?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    country: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    country: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    country: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMasterSubscriptionVariables = {
  filter?: ModelSubscriptionMasterFilterInput | null,
};

export type OnCreateMasterSubscription = {
  onCreateMaster?:  {
    __typename: "Master",
    id: string,
    masterTitle?: string | null,
    categoryName?: string | null,
    masterName?: string | null,
    masterDescription?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    items?:  {
      __typename: "ModelMasterItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMasterSubscriptionVariables = {
  filter?: ModelSubscriptionMasterFilterInput | null,
};

export type OnUpdateMasterSubscription = {
  onUpdateMaster?:  {
    __typename: "Master",
    id: string,
    masterTitle?: string | null,
    categoryName?: string | null,
    masterName?: string | null,
    masterDescription?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    items?:  {
      __typename: "ModelMasterItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMasterSubscriptionVariables = {
  filter?: ModelSubscriptionMasterFilterInput | null,
};

export type OnDeleteMasterSubscription = {
  onDeleteMaster?:  {
    __typename: "Master",
    id: string,
    masterTitle?: string | null,
    categoryName?: string | null,
    masterName?: string | null,
    masterDescription?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    items?:  {
      __typename: "ModelMasterItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMasterItemSubscriptionVariables = {
  filter?: ModelSubscriptionMasterItemFilterInput | null,
};

export type OnCreateMasterItemSubscription = {
  onCreateMasterItem?:  {
    __typename: "MasterItem",
    masterID: string,
    id: string,
    itemName?: string | null,
    itemType?: string | null,
    itemAttributes?: Array< string | null > | null,
    mastercode?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMasterItemSubscriptionVariables = {
  filter?: ModelSubscriptionMasterItemFilterInput | null,
};

export type OnUpdateMasterItemSubscription = {
  onUpdateMasterItem?:  {
    __typename: "MasterItem",
    masterID: string,
    id: string,
    itemName?: string | null,
    itemType?: string | null,
    itemAttributes?: Array< string | null > | null,
    mastercode?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMasterItemSubscriptionVariables = {
  filter?: ModelSubscriptionMasterItemFilterInput | null,
};

export type OnDeleteMasterItemSubscription = {
  onDeleteMasterItem?:  {
    __typename: "MasterItem",
    masterID: string,
    id: string,
    itemName?: string | null,
    itemType?: string | null,
    itemAttributes?: Array< string | null > | null,
    mastercode?: string | null,
    displayOrder?: number | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePtpTemplateDefSubscriptionVariables = {
  filter?: ModelSubscriptionPtpTemplateDefFilterInput | null,
};

export type OnCreatePtpTemplateDefSubscription = {
  onCreatePtpTemplateDef?:  {
    __typename: "PtpTemplateDef",
    id: string,
    templateName: string,
    ptpoptions?:  {
      __typename: "PtpOptionsInfo",
      requiredPermits?: Array< string | null > | null,
      requiredChecklist?: Array< string | null > | null,
      requiredPPE?: Array< string | null > | null,
    } | null,
    isTemplateUsed?: string | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePtpTemplateDefSubscriptionVariables = {
  filter?: ModelSubscriptionPtpTemplateDefFilterInput | null,
};

export type OnUpdatePtpTemplateDefSubscription = {
  onUpdatePtpTemplateDef?:  {
    __typename: "PtpTemplateDef",
    id: string,
    templateName: string,
    ptpoptions?:  {
      __typename: "PtpOptionsInfo",
      requiredPermits?: Array< string | null > | null,
      requiredChecklist?: Array< string | null > | null,
      requiredPPE?: Array< string | null > | null,
    } | null,
    isTemplateUsed?: string | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePtpTemplateDefSubscriptionVariables = {
  filter?: ModelSubscriptionPtpTemplateDefFilterInput | null,
};

export type OnDeletePtpTemplateDefSubscription = {
  onDeletePtpTemplateDef?:  {
    __typename: "PtpTemplateDef",
    id: string,
    templateName: string,
    ptpoptions?:  {
      __typename: "PtpOptionsInfo",
      requiredPermits?: Array< string | null > | null,
      requiredChecklist?: Array< string | null > | null,
      requiredPPE?: Array< string | null > | null,
    } | null,
    isTemplateUsed?: string | null,
    isActive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
