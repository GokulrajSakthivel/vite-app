// import type { MutableModel } from '@aws-amplify/datastore';
// import { Users } from '../models/index.js';
// import { Auth, DataStore } from 'aws-amplify';


// export interface SyncStatus {
//     total: number;
//     synced: number;
//     pending: number;
//     items: Array<{
//         id: string;
//         // formType?: string;
//         // status?: string;
//         name?: string;
//         synced: boolean;
//         version?: number;
//         lastChangedAt?: number;
//         owner?: string;
//     }>;
// }



// export async function forceSyncAllPendingItems(): Promise<void> {
//     console.log('🔄 Auto-syncing ALL pending items (automatic after login)...');

//     try {
//         const { DataStore } = await import('@aws-amplify/datastore');
//         const { Users } = await import('../models/index.js');

//         // Get all items
//         const allItems = await DataStore.query(Users);
//         console.log(`   📋 Total items: ${allItems.length}`);

//         // Find items without version (new items, never synced)
//         const newPendingItems = allItems.filter((item: any) => {
//             return !(item._version && item._version > 0);
//         });

//         // Find items with version but potentially pending updates
//         // Items that have been updated offline might need their updates synced
//         // We'll trigger a sync by updating them
//         const existingItems = allItems.filter((item: any) => {
//             return !!(item._version && item._version > 0);
//         });

//         console.log(`   📋 New items (no version): ${newPendingItems.length}`);
//         console.log(`   📋 Existing items (with version): ${existingItems.length}`);

//         if (newPendingItems.length === 0 && existingItems.length === 0) {
//             console.log('   ✅ No pending items to sync');
//             return;
//         }

//         let syncedCount = 0;
//         let queuedCount = 0;

//         // First, handle new items (no version) - these need to be recreated
//         if (newPendingItems.length > 0) {
//             console.log(`   🔄 Syncing ${newPendingItems.length} new items (recreating to trigger CREATE)...`);

//             for (const item of newPendingItems) {
//                 try {
//                     const itemId = item.id.substring(0, 20);
//                     console.log(`   🔄 Force syncing item ${itemId}...`);

//                     // CRITICAL: Items with no version were never synced to DynamoDB
//                     // DataStore.save() with copyOf() tries to UPDATE, but item doesn't exist in DynamoDB
//                     // Solution: Use safetyFormService.create() which handles this correctly
//                     // But we need to preserve the original ID, so we'll delete and recreate

//                     try {
//                         // Check if item is marked as deleted
//                         const isDeleted = (item as any)._deleted;
//                         if (isDeleted) {
//                             console.log(`   ⏭️ Item ${itemId} is marked as deleted, skipping`);
//                             continue;
//                         }

//                         // Save item data before deletion
//                         const itemData = {
//                             // formType: item.formType || 'PTP',
//                             // projectName: item.projectName,
//                             // location: item.location,
//                             // workDate: item.workDate,
//                             // foremanName: item.foremanName,
//                             // foremanSignature: item.foremanSignature,
//                             // requiredPermits: item.requiredPermits || [],
//                             // requiredChecklist: item.requiredChecklist || [],
//                             // ppe: item.ppe,
//                             // hazards: item.hazards || [],
//                             // controlMeasures: item.controlMeasures || [],
//                             // tasks: item.tasks || [],
//                             // emergencyActionPlan: item.emergencyActionPlan,
//                             // emergencyMusterArea: item.emergencyMusterArea,
//                             // emergencyContacts: item.emergencyContacts,
//                             // teamMembers: item.teamMembers || [],
//                             // crewSignatures: item.crewSignatures,
//                             // nobodyHurtAcknowledgment: item.nobodyHurtAcknowledgment,
//                             // nobodyHurtDate: item.nobodyHurtDate,
//                             // supervisorStartSignature: item.supervisorStartSignature,
//                             // supervisorStartDate: item.supervisorStartDate,
//                             // supervisorStartPhone: item.supervisorStartPhone,
//                             // endOfShiftReview: item.endOfShiftReview,
//                             // superintendentSignature: item.superintendentSignature,
//                             // superintendentReviewDate: item.superintendentReviewDate,
//                             // superintendentEndPhone: item.superintendentEndPhone,
//                             // status: item.status || 'draft',
//                             name: item.name,
//                             email: item.email,
//                             createdAt: item.createdAt || new Date().toISOString(),
//                             updatedAt: new Date().toISOString()
//                         };

//                         // Delete the old item (local only, doesn't affect DynamoDB)
//                         try {
//                             await DataStore.delete(item);
//                             console.log(`   🗑️ Deleted local item ${itemId}`);
//                         } catch (deleteError: any) {
//                             console.log(`   ⚠️ Could not delete local item: ${deleteError?.message}`);
//                             // Continue anyway - we'll try to create new one
//                         }

//                         // Wait a moment
//                         await new Promise(resolve => setTimeout(resolve, 500));

//                         // Create new item using safetyFormService (this will trigger CREATE in DynamoDB)
//                         const { safetyFormService } = await import('../services/amplifyDataService');
//                         const recreated = await safetyFormService.create(itemData);

//                         console.log(`   ✅ Recreated item with new ID: ${recreated.id.substring(0, 20)}...`);

//                         // Wait for sync
//                         await new Promise(resolve => setTimeout(resolve, 1000));

//                         // Check if it got a version
//                         const reQueried = await DataStore.query(Users, recreated.id);
//                         const version = (reQueried as any)?._version;

//                         if (version && version > 0) {
//                             console.log(`   ✅ Item synced! Version: ${version}`);
//                             syncedCount++;
//                         } else {
//                             console.log(`   ⏳ Item created, waiting for sync...`);
//                             queuedCount++;
//                         }

//                     } catch (error: any) {
//                         console.error(`   ❌ Error recreating item ${item.id.substring(0, 20)}:`, error?.message);
//                         console.error(`   Error details:`, error);
//                         console.error(`   ⚠️ This item may need to be manually recreated in the UI`);
//                     }
//                 } catch (error: any) {
//                     console.error(`   ❌ Error force syncing item ${item.id.substring(0, 20)}:`, error?.message);
//                     console.error(`   Error details:`, error);
//                 }
//             }
//         }

//         // Second, handle existing items with versions - trigger sync for any pending updates
//         // This ensures updates made offline are synced after re-login
//         if (existingItems.length > 0) {
//             console.log(`\n   🔄 Syncing ${existingItems.length} existing items (triggering UPDATE sync for offline edits)...`);

//             for (const item of existingItems) {
//                 try {
//                     const itemId = item.id.substring(0, 20);
//                     const currentVersion = (item as any)._version;

//                     // Force update to trigger sync of any pending changes
//                     // This ensures updates made offline are synced after re-login
//                     // await DataStore.save(
//                     //     Users.copyOf(item, (updated: MutableModel<Users>) => {
//                     //         // Just update the timestamp to trigger sync
//                     //         // This will sync any pending changes made offline
//                     //         (updated as any).updatedAt  = new Date().toISOString();
//                     //     })
//                     // );

//                     await DataStore.save(
//                         Users.copyOf(item, (updated) => {
//                             updated.name = updated.name;
//                         })
//                     );
//                     // Wait a moment
//                     await new Promise(resolve => setTimeout(resolve, 500));

//                     // Check if version incremented (indicating sync)
//                     const reQueried = await DataStore.query(Users, item.id);
//                     const newVersion = (reQueried as any)?._version;

//                     if (newVersion && newVersion > currentVersion) {
//                         console.log(`   ✅ Item ${itemId} update synced (version ${currentVersion} → ${newVersion})`);
//                         syncedCount++;
//                     } else {
//                         console.log(`   ⏳ Item ${itemId} update queued (version ${currentVersion})`);
//                         queuedCount++;
//                     }
//                 } catch (error: any) {
//                     console.error(`   ❌ Error syncing update for item ${item.id.substring(0, 20)}:`, error?.message);
//                 }
//             }
//         }

//         console.log(`\n   ✅ Force sync completed:`);
//         console.log(`      - New items processed: ${newPendingItems.length}`);
//         console.log(`      - Existing items processed: ${existingItems.length}`);
//         console.log(`      - Total synced: ${syncedCount} items`);
//         console.log(`      - Total queued: ${queuedCount} items (will sync within 20-30 seconds)`);
//         console.log('   💡 Wait 20-30 seconds and check: checkSyncStatus()');
//         console.log('   💡 Check DynamoDB to verify items are synced');

//     } catch (error: any) {
//         console.error('❌ Error force syncing items:', error?.message || error);
//     }
// }



// /**
//  * Get detailed sync status with recommendations
//  */
// export async function getDetailedSyncStatus() {
//     const status = await checkSafetyFormSyncStatus();

//     console.log('📊 Sync Status Report');
//     console.log('====================');
//     console.log(`Total items: ${status.total}`);
//     console.log(`✅ Synced to DynamoDB: ${status.synced}`);
//     console.log(`⏳ Pending sync: ${status.pending}`);

//     if (status.pending > 0) {
//         console.log('\n⏳ Pending items (not yet synced):');

//         // Get current user ID for comparison
//         let currentUserId: string | null = null;
//         try {
//             // const user = await getCurrentUser().catch(() => null);
//             const user = await Auth.currentAuthenticatedUser();
//             currentUserId = user?.username || (user as any)?.attributes?.sub || null;
//         } catch (e) {
//             // Not authenticated
//         }

//         status.items
//             .filter(item => !item.synced)
//             .forEach((item, index) => {
//                 console.log(`   ${index + 1}. ID: ${item.id.substring(0, 20)}...`);
//                 // console.log(`      Form Type: ${item.formType || 'N/A'}`);
//                 // console.log(`      Status: ${item.status || 'N/A'}`);
//                 console.log(`      name: ${item.name || 'N/A'}`);
//                 console.log(`      Owner: ${item.owner || '❌ MISSING'}`);
//                 console.log(`      Current User: ${currentUserId || '❌ Not authenticated'}`);
//                 if (item.owner && currentUserId) {
//                     console.log(`      Owner Match: ${item.owner === currentUserId ? '✅ Yes' : '❌ No'}`);
//                 }
//                 console.log(`      Reason: No version number (created offline or sync pending)`);
//                 if (!item.owner || (currentUserId && item.owner !== currentUserId)) {
//                     console.log(`      ⚠️ CRITICAL: Owner field is missing or incorrect!`);
//                     console.log(`      💡 Run: fixPendingItemsOwner() to fix this`);
//                 }
//             });

//         console.log('\n💡 Recommendations:');
//         console.log('   1. Make sure you are signed in');
//         console.log('   2. Check that you are online');
//         console.log('   3. Wait 10-30 seconds for automatic sync');
//         console.log('   4. Check browser console for sync errors');
//         console.log('   5. Try refreshing the page to trigger sync');
//     }

//     if (status.synced > 0) {
//         console.log('\n✅ Synced items:');
//         status.items
//             .filter(item => item.synced)
//             .slice(0, 5) // Show first 5
//             .forEach((item, index) => {
//                 console.log(`   ${index + 1}. ID: ${item.id.substring(0, 20)}...`);
//                 console.log(`      Version: ${item.version}`);
//                 console.log(`      Last Changed: ${item.lastChangedAt ? new Date(item.lastChangedAt).toISOString() : 'N/A'}`);
//             });
//         if (status.synced > 5) {
//             console.log(`   ... and ${status.synced - 5} more`);
//         }
//     }

//     return status;
// }


// /**
//  * Check sync status of SafetyForm items
//  */
// export async function checkSafetyFormSyncStatus(): Promise<SyncStatus> {
//     try {
//         const allForms = await DataStore.query(Users);

//         const items = allForms.map((form: any) => {
//             const version = form._version;
//             const lastChangedAt = form._lastChangedAt;
//             const synced = !!version && version > 0;

//             return {
//                 id: form.id,
//                 formType: form.formType,
//                 status: form.status,
//                 synced,
//                 version: version || undefined,
//                 lastChangedAt: lastChangedAt || undefined,
//                 owner: form.owner,
//             };
//         });

//         const synced = items.filter(item => item.synced).length;
//         const pending = items.filter(item => !item.synced).length;

//         return {
//             total: allForms.length,
//             synced,
//             pending,
//             items,
//         };
//     } catch (error: any) {
//         console.error('Error checking sync status:', error);
//         return {
//             total: 0,
//             synced: 0,
//             pending: 0,
//             items: [],
//         };
//     }
// }


// // Expose globally for debugging
// if (typeof window !== 'undefined') {
//     (window as any).checkSyncStatus = getDetailedSyncStatus;
//     // (window as any).diagnoseSync = diagnoseSyncIssues;
//     // (window as any).forceSyncPendingItems = forceSyncPendingItems;
//     (window as any).forceSyncAllPendingItems = forceSyncAllPendingItems;
//     // (window as any).forceSyncItemsWithCorrectOwner = forceSyncItemsWithCorrectOwner;
//     // (window as any).fixPendingItemsOwner = fixPendingItemsOwner;
//     // (window as any).restartDataStore = restartDataStore;
//     // (window as any).checkDataStoreSyncEnabled = checkDataStoreSyncEnabled;
//     // (window as any).testSyncWithNewItem = testSyncWithNewItem;
//     // (window as any).checkItemInDataStore = checkItemInDataStore;
//     // (window as any).checkItemOwnerStatus = checkItemOwnerStatus;
//     // (window as any).clearIndexedDB = clearIndexedDB;
//     console.log('💡 Tips:');
//     console.log('   - Run checkSyncStatus() to see sync status');
//     console.log('   - Run diagnoseSync() to diagnose why items aren\'t syncing');
//     console.log('   - Run checkDataStoreSyncEnabled() to verify sync is enabled');
//     console.log('   - Run testSyncWithNewItem() to test if sync works for NEW items');
//     console.log('   - Run checkItemInDataStore("item-id") to check if an item exists');
//     console.log('   - Run fixPendingItemsOwner() to fix owner fields for items from previous sessions');
//     console.log('   - Run forceSyncPendingItems() to manually trigger sync for pending items');
//     console.log('   - Run restartDataStore() to restart DataStore and trigger sync');
//     console.log('   - Run clearIndexedDB() to clear all local IndexedDB data (⚠️ destructive!)');
// }