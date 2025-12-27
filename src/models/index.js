// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Address, Master, MasterItem } = initSchema(schema);

export {
  Users,
  Address,
  Master,
  MasterItem
};