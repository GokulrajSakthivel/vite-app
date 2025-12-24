// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Address } = initSchema(schema);

export {
  Users,
  Address
};