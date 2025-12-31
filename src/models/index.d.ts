import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, OptionallyManagedIdentifier, CompositeIdentifier, CustomIdentifier } from "@aws-amplify/datastore";
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

type EagerHazardSelections = {
  readonly hazard?: string | null;
  readonly hazardMeasure?: (string | null)[] | null;
  readonly rcd?: number | null;
}

type LazyHazardSelections = {
  readonly hazard?: string | null;
  readonly hazardMeasure?: (string | null)[] | null;
  readonly rcd?: number | null;
}

export declare type HazardSelections = LazyLoading extends LazyLoadingDisabled ? EagerHazardSelections : LazyHazardSelections

export declare const HazardSelections: (new (init: ModelInit<HazardSelections>) => HazardSelections)

type EagerPTPSelections = {
  readonly requiredPermits?: (string | null)[] | null;
  readonly rquiredChecklist?: (string | null)[] | null;
  readonly requiredPPE?: (string | null)[] | null;
  readonly hazardAndHazardMeasure?: (HazardSelections | null)[] | null;
}

type LazyPTPSelections = {
  readonly requiredPermits?: (string | null)[] | null;
  readonly rquiredChecklist?: (string | null)[] | null;
  readonly requiredPPE?: (string | null)[] | null;
  readonly hazardAndHazardMeasure?: (HazardSelections | null)[] | null;
}

export declare type PTPSelections = LazyLoading extends LazyLoadingDisabled ? EagerPTPSelections : LazyPTPSelections

export declare const PTPSelections: (new (init: ModelInit<PTPSelections>) => PTPSelections)

type EagerForemanSignInfo = {
  readonly foremanName?: string | null;
  readonly signIn?: string | null;
  readonly signInDateTime: string;
  readonly signOut?: string | null;
  readonly signOutDateTime: string;
  readonly companyName?: string | null;
}

type LazyForemanSignInfo = {
  readonly foremanName?: string | null;
  readonly signIn?: string | null;
  readonly signInDateTime: string;
  readonly signOut?: string | null;
  readonly signOutDateTime: string;
  readonly companyName?: string | null;
}

export declare type ForemanSignInfo = LazyLoading extends LazyLoadingDisabled ? EagerForemanSignInfo : LazyForemanSignInfo

export declare const ForemanSignInfo: (new (init: ModelInit<ForemanSignInfo>) => ForemanSignInfo)

type EagerEmergencyContactInfo = {
  readonly isEmergencyActionPlanDiscussed?: boolean | null;
  readonly safety?: string | null;
  readonly superintendent?: string | null;
  readonly emergencyMusterArea?: string | null;
  readonly other?: string | null;
}

type LazyEmergencyContactInfo = {
  readonly isEmergencyActionPlanDiscussed?: boolean | null;
  readonly safety?: string | null;
  readonly superintendent?: string | null;
  readonly emergencyMusterArea?: string | null;
  readonly other?: string | null;
}

export declare type EmergencyContactInfo = LazyLoading extends LazyLoadingDisabled ? EagerEmergencyContactInfo : LazyEmergencyContactInfo

export declare const EmergencyContactInfo: (new (init: ModelInit<EmergencyContactInfo>) => EmergencyContactInfo)

type EagerShiftReviewInfo = {
  readonly isAllToolsusedAndStroedProperly?: boolean | null;
  readonly haveAllPermitsClosed?: boolean | null;
  readonly didAnyIncidentesorInjuries?: boolean | null;
  readonly wasTheIncidentReported?: boolean | null;
  readonly descriptionOfIncident?: string | null;
}

type LazyShiftReviewInfo = {
  readonly isAllToolsusedAndStroedProperly?: boolean | null;
  readonly haveAllPermitsClosed?: boolean | null;
  readonly didAnyIncidentesorInjuries?: boolean | null;
  readonly wasTheIncidentReported?: boolean | null;
  readonly descriptionOfIncident?: string | null;
}

export declare type ShiftReviewInfo = LazyLoading extends LazyLoadingDisabled ? EagerShiftReviewInfo : LazyShiftReviewInfo

export declare const ShiftReviewInfo: (new (init: ModelInit<ShiftReviewInfo>) => ShiftReviewInfo)

type EagerTaskDef = {
  readonly task?: string | null;
  readonly toolsAndEquipment?: string | null;
  readonly taskHazarad?: string | null;
  readonly hazardControl?: string | null;
  readonly competentPerson?: string | null;
}

type LazyTaskDef = {
  readonly task?: string | null;
  readonly toolsAndEquipment?: string | null;
  readonly taskHazarad?: string | null;
  readonly hazardControl?: string | null;
  readonly competentPerson?: string | null;
}

export declare type TaskDef = LazyLoading extends LazyLoadingDisabled ? EagerTaskDef : LazyTaskDef

export declare const TaskDef: (new (init: ModelInit<TaskDef>) => TaskDef)

type EagerCrewLoginInfo = {
  readonly crewName?: string | null;
  readonly signIn?: string | null;
  readonly signInDateTime: string;
  readonly signInComments?: string | null;
  readonly signOut?: string | null;
  readonly signOutDateTime: string;
  readonly signOutComments?: string | null;
}

type LazyCrewLoginInfo = {
  readonly crewName?: string | null;
  readonly signIn?: string | null;
  readonly signInDateTime: string;
  readonly signInComments?: string | null;
  readonly signOut?: string | null;
  readonly signOutDateTime: string;
  readonly signOutComments?: string | null;
}

export declare type CrewLoginInfo = LazyLoading extends LazyLoadingDisabled ? EagerCrewLoginInfo : LazyCrewLoginInfo

export declare const CrewLoginInfo: (new (init: ModelInit<CrewLoginInfo>) => CrewLoginInfo)

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
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
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
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
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
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
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
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
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
  readonly ptpOptions?: PtpOptionsInfo | null;
  readonly isTemplateUsed?: string | null;
  readonly isActive?: boolean | null;
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
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
  readonly ptpOptions?: PtpOptionsInfo | null;
  readonly isTemplateUsed?: string | null;
  readonly isActive?: boolean | null;
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PtpTemplateDef = LazyLoading extends LazyLoadingDisabled ? EagerPtpTemplateDef : LazyPtpTemplateDef

export declare const PtpTemplateDef: (new (init: ModelInit<PtpTemplateDef>) => PtpTemplateDef) & {
  copyOf(source: PtpTemplateDef, mutator: (draft: MutableModel<PtpTemplateDef>) => MutableModel<PtpTemplateDef> | void): PtpTemplateDef;
}

type EagerPTPTemplate = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<PTPTemplate, 'templateDefId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly templateDefId: string;
  readonly ptpOptonsSelection?: (PTPSelections | null)[] | null;
  readonly foremanSignInandOut?: (ForemanSignInfo | null)[] | null;
  readonly emergencyContacts?: (EmergencyContactInfo | null)[] | null;
  readonly shiftReviewes?: (ShiftReviewInfo | null)[] | null;
  readonly status?: string | null;
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
  readonly tasks?: (PTPTasksValue | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPTPTemplate = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<PTPTemplate, 'templateDefId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly templateDefId: string;
  readonly ptpOptonsSelection?: (PTPSelections | null)[] | null;
  readonly foremanSignInandOut?: (ForemanSignInfo | null)[] | null;
  readonly emergencyContacts?: (EmergencyContactInfo | null)[] | null;
  readonly shiftReviewes?: (ShiftReviewInfo | null)[] | null;
  readonly status?: string | null;
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
  readonly tasks: AsyncCollection<PTPTasksValue>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PTPTemplate = LazyLoading extends LazyLoadingDisabled ? EagerPTPTemplate : LazyPTPTemplate

export declare const PTPTemplate: (new (init: ModelInit<PTPTemplate>) => PTPTemplate) & {
  copyOf(source: PTPTemplate, mutator: (draft: MutableModel<PTPTemplate>) => MutableModel<PTPTemplate> | void): PTPTemplate;
}

type EagerPTPTasksValue = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<PTPTasksValue, 'templateId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly templateId: string;
  readonly entityType?: string | null;
  readonly ptpTasks?: (TaskDef | null)[] | null;
  readonly crewMemberLogin?: (CrewLoginInfo | null)[] | null;
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPTPTasksValue = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<PTPTasksValue, 'templateId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly templateId: string;
  readonly entityType?: string | null;
  readonly ptpTasks?: (TaskDef | null)[] | null;
  readonly crewMemberLogin?: (CrewLoginInfo | null)[] | null;
  readonly createdBy?: string | null;
  readonly modifiedBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PTPTasksValue = LazyLoading extends LazyLoadingDisabled ? EagerPTPTasksValue : LazyPTPTasksValue

export declare const PTPTasksValue: (new (init: ModelInit<PTPTasksValue>) => PTPTasksValue) & {
  copyOf(source: PTPTasksValue, mutator: (draft: MutableModel<PTPTasksValue>) => MutableModel<PTPTasksValue> | void): PTPTasksValue;
}

type EagerProjectSiteHierarchy = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<ProjectSiteHierarchy, ['userId', 'projectSortKey']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly projectSortKey: string;
  readonly entityType?: string | null;
  readonly region?: string | null;
  readonly businessUnit?: string | null;
  readonly projectSite?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectSiteHierarchy = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<ProjectSiteHierarchy, ['userId', 'projectSortKey']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly projectSortKey: string;
  readonly entityType?: string | null;
  readonly region?: string | null;
  readonly businessUnit?: string | null;
  readonly projectSite?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectSiteHierarchy = LazyLoading extends LazyLoadingDisabled ? EagerProjectSiteHierarchy : LazyProjectSiteHierarchy

export declare const ProjectSiteHierarchy: (new (init: ModelInit<ProjectSiteHierarchy>) => ProjectSiteHierarchy) & {
  copyOf(source: ProjectSiteHierarchy, mutator: (draft: MutableModel<ProjectSiteHierarchy>) => MutableModel<ProjectSiteHierarchy> | void): ProjectSiteHierarchy;
}