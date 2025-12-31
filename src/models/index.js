// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Address, Master, MasterItem, PtpTemplateDef, PTPTemplate, PTPTasksValue, ProjectSiteHierarchy, HazardandMeasuresControlDef, PtpOptionsInfo, HazardSelections, PTPSelections, ForemanSignInfo, EmergencyContactInfo, ShiftReviewInfo, TaskDef, CrewLoginInfo } = initSchema(schema);

export {
  Users,
  Address,
  Master,
  MasterItem,
  PtpTemplateDef,
  PTPTemplate,
  PTPTasksValue,
  ProjectSiteHierarchy,
  HazardandMeasuresControlDef,
  PtpOptionsInfo,
  HazardSelections,
  PTPSelections,
  ForemanSignInfo,
  EmergencyContactInfo,
  ShiftReviewInfo,
  TaskDef,
  CrewLoginInfo
};