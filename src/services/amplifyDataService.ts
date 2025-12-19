// import { DataStore, Amplify } from "aws-amplify";
// import type { Users as UsersType } from '../models/index.js';
// import  { Users as UsersModel } from '../models/index.js';

// // import { DataItem as DataItemModel, User as UserModel, Report as ReportModel, AnalyticsData as AnalyticsDataModel, ActivityLog as ActivityLogModel, SafetyForm as SafetyFormModel } from '../models/index.js';
// import type { MutableModel } from '@aws-amplify/datastore';


// type Users = {
//      id: string;
//      email: string;
//      name?: string | null | undefined;
//      createdAt?: string | null | undefined;
//      updatedAt?: string | null | undefined;  
// }


// export class AmplifyDataService {

//     static async start(): Promise<boolean> {
//         try {
//             await DataStore.start();
//             console.log('DataStore started');
//             return true;
//         } catch (error) {
//             console.error('Error starting DataStore:', error);
//             return false;
//         }
//     }

//     static async stop() {
//         try {
//             await DataStore.stop();
//             console.log('DataStore stopped');
//         } catch (error) {
//             console.error('Error stopping DataStore:', error);
//         }
//     }

//     static async clear() {
//         try {
//             await DataStore.clear();
//             console.log('DataStore cleared');
//         } catch (error) {
//             console.error('Error clearing DataStore:', error);
//         }
//     }

//     /**
//      * Get sync status
//      */
//     static async getSyncStatus() {
//         // DataStore automatically handles sync, but we can check network status
//         return {
//             isOnline: navigator.onLine,
//             // DataStore doesn't expose sync queue directly, but syncs automatically
//         };
//     }

    

// }

// /**
//  * Safety Form Operations
//  */
// export const safetyFormService = {
//   async getAll() {
//     return await DataStore.query(UsersModel);
//   },

//   async getById(id: string) {
//     return await DataStore.query(UsersModel, id);
//   },

//   async create(data: Partial<UsersType>) {
//         // CRITICAL: Get current user ID to set owner field
//         // This ensures items created offline can sync when user logs back in
//         let owner: string | undefined = undefined;
//         try {
//             // const { getCurrentUser } = await import('@aws-amplify/auth');
//             //   const user = await getCurrentUser();
//             const user = await (Amplify.Auth as any).currentAuthenticatedUser();

//             owner =
//                 user?.username || (user as any)?.attributes?.sub || (user as any)?.attributes?.email || undefined;
//         } catch (e) {
//             // User not authenticated - owner will be set when they log in
//             console.log('   ℹ️ User not authenticated - owner will be set on next login');
//         }

//         const form = new UsersModel({
//             // formType: data.formType || 'SafetyChecklist',
//             // requiredPermits: data.requiredPermits || [],
//             // requiredChecklist: data.requiredChecklist || [],
//             // ppe: data.ppe || '{}',
//             // hazards: data.hazards || [],
//             // controlMeasures: data.controlMeasures || [],
//             // tasks: data.tasks || [],
//             // emergencyActionPlan: data.emergencyActionPlan || false,
//             // emergencyMusterArea: data.emergencyMusterArea || '',
//             // emergencyContacts: data.emergencyContacts || '{}',
//             // teamMembers: data.teamMembers || [],
//             // status: data.status || 'draft',
//             name:data.name || '',
//             email:data.email ||'',
//             createdAt: new Date().toISOString(),
//             updatedAt: new Date().toISOString(),
//             ...(owner ? { owner } : {}), // Set owner if available
//             ...data,
//         });

//         console.log('📝 [CREATE] Users in DataStore:', {
//             formType: form.name,
//             status: form.email,
//             timestamp: new Date().toISOString(),
//         });

//         try {
//             const saved = await DataStore.save(form);

//             const version = (saved as any)._version;
//             const lastChanged = (saved as any)._lastChangedAt;

//             console.log('✅ [SAVED] Users saved to DataStore:', {
//                 id: saved.id,
//                 version: version || 'N/A (local only)',
//                 lastChanged: lastChanged || 'N/A',
//                 synced: version ? '✅ Will sync to DynamoDB' : '⏳ Local only (will sync when online)',
//             });

//             if (!version) {
//                 console.log('   ℹ️ Item has no version yet - this is normal for new items');
//                 console.log('   ℹ️ Version will be assigned when sync completes');
//                 console.log('   ℹ️ Check DynamoDB in 10-30 seconds');
//             } else {
//                 console.log('   ✅ Item has version - sync is in progress or complete');
//             }

//             // Log sync operation
//             const { logSyncOperation } = await import('../utils/syncLogger');
//             logSyncOperation('CREATE', 'SafetyForm', saved.id, data);

//             return saved;
//         } catch (error: any) {
//             console.error('❌ [ERROR] Failed to save SafetyForm:', error);
//             console.error('   Message:', error?.message || error);
//             throw error;
//         }
//     },

//   async update(id: string, updates: Partial<UsersType>) {
//     console.log('📝 [UPDATE] SafetyForm in DataStore:', {
//       id,
//       updates: Object.keys(updates).join(', '),
//       timestamp: new Date().toISOString(),
//     });
    
//     const original = await DataStore.query(UsersModel, id);
//     if (!original) {
//       throw new Error('SafetyForm not found');
//     }
    
//     try {
      
//       const updated = await DataStore.save(
//         UsersModel.copyOf(original, (updated: MutableModel<UsersType>) => {
//           // Use Object.assign to copy all updates, including owner field
//           Object.assign(updated, updates);
//           // Ensure updatedAt is always set
//             // updated.updatedAt = new Date().toISOString();
//           // If owner is in updates, explicitly set it (DataStore may ignore it otherwise)
//           if ((updates as any).owner) {
//             (updated as any).owner = (updates as any).owner;
//           }
//         })
//       );
      
//       const version = (updated as any)._version;
//       console.log('✅ [UPDATED] SafetyForm updated in DataStore:', {
//         id: updated.id,
//         version: version || 'N/A',
//         synced: version ? '✅ Will sync to DynamoDB' : '⏳ Local only',
//       });
      
//       // Log sync operation
//       const { logSyncOperation } = await import('../utils/syncLogger');
//       logSyncOperation('UPDATE', 'Users', id, updates);
      
//       return updated;
//     } catch (error: any) {
//       console.error('❌ [ERROR] Failed to update SafetyForm:', error);
//       throw error;
//     }
//   },

//   async delete(id: string) {
//     const form = await DataStore.query(UsersModel, id);
//     if (form) {
//       await DataStore.delete(form);
//     }
//   },
// };