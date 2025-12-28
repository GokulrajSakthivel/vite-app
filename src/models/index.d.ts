import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, OptionallyManagedIdentifier, CompositeIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerHazardandMeasuresControlDef = {
  readonly hazard?: string | null;
  readonly hazardMeasures?: (string | null)[] | null;
}

type LazyHazardandMeasuresControlDef = {
  readonly hazard?: string | null;
  readonly hazardMeasures?: (string | null)[] | null;
}

export declare type HazardandMeasuresControlDef = LazyLoading extends LazyLoadingDisabled ? EagerHazardandMeasuresControlDef : LazyHazardandMeasuresControlDef

export declare const HazardandMeasuresControlDef: (new (init: ModelInit<HazardandMeasuresControlDef>) => HazardandMeasuresControlDef)

type EagerPtpOptionsInfo = {
  readonly requiredPermits?: (string | null)[] | null;
  readonly requiredChecklist?: (string | null)[] | null;
  readonly requiredPPE?: (string | null)[] | null;
  readonly hazardandMeasures?: (HazardandMeasuresControlDef | null)[] | null;
}

type LazyPtpOptionsInfo = {
  readonly requiredPermits?: (string | null)[] | null;
  readonly requiredChecklist?: (string | null)[] | null;
  readonly requiredPPE?: (string | null)[] | null;
  readonly hazardandMeasures?: (HazardandMeasuresControlDef | null)[] | null;
}

export declare type PtpOptionsInfo = LazyLoading extends LazyLoadingDisabled ? EagerPtpOptionsInfo : LazyPtpOptionsInfo

export declare const PtpOptionsInfo: (new (init: ModelInit<PtpOptionsInfo>) => PtpOptionsInfo)

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly addresses?: (Address | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly addresses: AsyncCollection<Address>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly country: string;
  readonly phone: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly country: string;
  readonly phone: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

type EagerMaster = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Master, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly masterTitle?: string | null;
  readonly categoryName?: string | null;
  readonly masterName?: string | null;
  readonly masterDescription?: string | null;
  readonly displayOrder?: number | null;
  readonly isActive?: boolean | null;
  readonly items?: (MasterItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMaster = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Master, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly masterTitle?: string | null;
  readonly categoryName?: string | null;
  readonly masterName?: string | null;
  readonly masterDescription?: string | null;
  readonly displayOrder?: number | null;
  readonly isActive?: boolean | null;
  readonly items: AsyncCollection<MasterItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Master = LazyLoading extends LazyLoadingDisabled ? EagerMaster : LazyMaster

export declare const Master: (new (init: ModelInit<Master>) => Master) & {
  copyOf(source: Master, mutator: (draft: MutableModel<Master>) => MutableModel<Master> | void): Master;
}

type EagerMasterItem = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<MasterItem, ['masterID', 'id']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly masterID: string;
  readonly itemName?: string | null;
  readonly itemType?: string | null;
  readonly itemAttributes?: (string | null)[] | null;
  readonly mastercode?: string | null;
  readonly displayOrder?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMasterItem = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<MasterItem, ['masterID', 'id']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly masterID: string;
  readonly itemName?: string | null;
  readonly itemType?: string | null;
  readonly itemAttributes?: (string | null)[] | null;
  readonly mastercode?: string | null;
  readonly displayOrder?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MasterItem = LazyLoading extends LazyLoadingDisabled ? EagerMasterItem : LazyMasterItem

export declare const MasterItem: (new (init: ModelInit<MasterItem>) => MasterItem) & {
  copyOf(source: MasterItem, mutator: (draft: MutableModel<MasterItem>) => MutableModel<MasterItem> | void): MasterItem;
}

type EagerPtpTemplateDef = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<PtpTemplateDef, ['id', 'templateName']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly templateName: string;
  readonly ptpoptions?: PtpOptionsInfo | null;
  readonly isTemplateUsed?: string | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPtpTemplateDef = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<PtpTemplateDef, ['id', 'templateName']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly templateName: string;
  readonly ptpoptions?: PtpOptionsInfo | null;
  readonly isTemplateUsed?: string | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PtpTemplateDef = LazyLoading extends LazyLoadingDisabled ? EagerPtpTemplateDef : LazyPtpTemplateDef

export declare const PtpTemplateDef: (new (init: ModelInit<PtpTemplateDef>) => PtpTemplateDef) & {
  copyOf(source: PtpTemplateDef, mutator: (draft: MutableModel<PtpTemplateDef>) => MutableModel<PtpTemplateDef> | void): PtpTemplateDef;
}