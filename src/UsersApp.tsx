import { useEffect, useState } from "react";
import { DataStore, Auth } from "aws-amplify";
import { Users } from "./models";
// import type { Users as UsersType } from './models';
import { FaTrash } from "react-icons/fa";
// import { Amplify } from 'aws-amplify';
// import { AmplifyDataService } from "./services/amplifyDataService";
// import type { MutableModel } from '@aws-amplify/datastore';
// import { deepSyncDiagnostic } from "./utils/deepSyncDiagnostic.js";


export default function UsersApp() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<Users[]>([]);
  const [groups, setGroups] = useState<string[]>([]);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  // let restartAttempted = false;
  // let lastUserId: string | null = null;

  useEffect(() => {
    // deepSyncDiagnostic();
    loadCurrentUser();
    fetchUsers();
    getUserGroups();
    setupNetworkListener();
    // restartDataStoreAfterAuth();

    const sub = DataStore.observe(Users).subscribe(() => fetchUsers());
    return () => {
      sub.unsubscribe();
      cleanupDataStore();
      removeNetworkListener();
    };
  }, []);

//   async function restartDataStoreAfterAuth() {
//     console.warn('⚠️ restartDataStoreAfterAuth() is DISABLED to prevent data loss');
//     console.warn('   DataStore should NOT be restarted - it persists across sessions');
//     console.warn('   Schema is "allow: private" - owner field fixes are not needed');
//     console.warn('   DataStore will sync automatically when online');
//     // return; // Early return - function is disabled
//     try {
//         // Get current user ID - CRITICAL for owner field assignment
//         let currentUserId: string | null = null;
//         try {
//             const user = await (Amplify.Auth as any).currentAuthenticatedUser();
//             currentUserId = user.username || user.attributes?.sub || user.attributes?.email || null;
//             if (!currentUserId) {
//                 // Try alternative methods to get user ID
//                 const cognitoKeys = Object.keys(localStorage).filter(key =>
//                     key.includes('CognitoIdentityServiceProvider')
//                 );
//                 if (cognitoKeys.length > 0) {
//                     // Extract user ID from localStorage key
//                     const keyParts = cognitoKeys[0].split('.');
//                     if (keyParts.length > 1) {
//                         currentUserId = keyParts[keyParts.length - 1];
//                     }
//                 }
//             }
//             console.log('   👤 Current user ID:', currentUserId || 'Not available');
//         } catch (e: any) {
//             console.warn('   ⚠️ Could not get current user:', e?.message || e);
//             console.warn('   ⚠️ Owner field fixes will be skipped');
//         }

//         if (!currentUserId) {
//             console.error('   ❌ Cannot proceed without user ID - owner field fixes require authentication');
//             return;
//         }

//         // Check if this is a new login session (different user or first time)
//         const isNewSession = currentUserId && currentUserId !== lastUserId;

//         // Always run on new session, but allow re-running for same user if needed
//         // (e.g., after session timeout and re-login)
//         if (restartAttempted && !isNewSession) {
//             console.log('🔄 DataStore restart already attempted for this session');
//             console.log('   💡 Running owner field fix anyway (in case items were created offline)...');
//             // Continue to fix owner fields even if restart was already attempted
//             // This handles the case where items were created after the initial restart
//         } else {
//             console.log('🔄 Restarting DataStore after authentication...');
//             console.log('   User ID:', currentUserId);

//             // CRITICAL: Ensure DataStore is running before syncing
//             // If DataStore was stopped (after logout), start it first
//             let datastoreWasRunning = true;
//             try {
//                 // Try to query to see if DataStore is running
//                 const { DataStore } = await import('@aws-amplify/datastore');
//                 const { Users } = await import('../src/models');
//                 // await DataStore.query(Users, { limit: 1 });
//                 const data =  await DataStore.query(Users);
//                 const firstUser = data[0];
//                 console.log("User :" + firstUser)
//                 console.log('   ✅ DataStore is already running');
//             } catch (e) {
//                 // DataStore is not running, start it first
//                 console.log('   ⚠️ DataStore is not running, starting it first...');
//                 const started = await AmplifyDataService.start();
//                 if (!started) {
//                     console.error('   ❌ Failed to start DataStore for sync');
//                     return;
//                 }
//                 datastoreWasRunning = false;
//                 // Wait for DataStore to initialize
//                 await new Promise(resolve => setTimeout(resolve, 2000));
//             }

//             // CRITICAL: Sync local changes TO DynamoDB BEFORE restarting DataStore
//             // This prevents DynamoDB from overwriting offline changes
//             console.log('   🔄 Syncing local changes to DynamoDB before restart...');
//             try {
//                 const { forceSyncAllPendingItems } = await import('./utils/syncStatusChecker');
//                 // Sync all pending local changes to DynamoDB first
//                 await forceSyncAllPendingItems();
//                 console.log('   ✅ Local changes synced to DynamoDB');
//                 // Wait a bit for sync to complete
//                 await new Promise(resolve => setTimeout(resolve, 3000));
//             } catch (syncError: any) {
//                 console.warn('   ⚠️ Could not sync local changes before restart:', syncError?.message);
//                 console.warn('   ⚠️ Offline changes may be overwritten by DynamoDB data');
//             }

//             // Only stop DataStore if it was already running
//             // If we just started it, we don't need to restart it
//             if (datastoreWasRunning) {
//                 // Stop DataStore
//                 await AmplifyDataService.stop();
//                 console.log('   ✅ DataStore stopped');

//                 // Wait a moment for cleanup
//                 await new Promise(resolve => setTimeout(resolve, 1000));

//                 // Start DataStore again (now with auth tokens)
//                 // DynamoDB now has the latest data, so sync FROM DynamoDB won't overwrite changes
//                 const started = await AmplifyDataService.start();

//                 if (!started) {
//                     console.error('   ❌ Failed to restart DataStore');
//                     return;
//                 }

//                 console.log('   ✅ DataStore restarted with authentication');
//             } else {
//                 console.log('   ✅ DataStore is running with authentication');
//             }

//             console.log('   ✅ Local changes were synced before restart - no data loss');
//             lastUserId = currentUserId;
//             restartAttempted = true;
//         }

//         // CRITICAL: Always fix owner fields for pending items
//         // This ensures items created offline in previous sessions can sync
//         console.log('   🔧 Fixing owner fields for pending items (CRITICAL for production)...');
//         if (currentUserId) {
//             await fixOwnerFieldsForPendingItems(currentUserId as string);
//         }

//         // Note: We already synced local changes BEFORE restart, so we don't need to sync again
//         // DataStore will now sync FROM DynamoDB (which has the latest data)
//         // This ensures no data loss - offline changes are preserved

//         console.log('   ✅ Sync to DynamoDB should now work');
//         console.log('   ✅ Items from previous sessions should sync automatically');
//         console.log('   💡 Check sync status: checkSyncStatus()');

//     } catch (error: any) {
//         console.error('❌ Error restarting DataStore:', error);
//         console.error('   Message:', error?.message || error);
//         console.error('   Stack:', error?.stack);
//     }
// }



//   /**
//  * Fix owner fields for items created in previous sessions
//  * Items created offline might not have the correct owner field
//  * This is CRITICAL for production - items must have correct owner to sync
//  */
// async function fixOwnerFieldsForPendingItems(currentUserId: string) {
//     try {
//         const { Users } = await import('./models/index.js');
//         const { safetyFormService } = await import('./services/amplifyDataService');

//         // Get all SafetyForms
//         const allForms = await DataStore.query(Users);

//         // Find items that need owner fix:
//         // 1. Items without version (not synced) AND (no owner OR wrong owner)
//         // 2. Items with version but wrong owner (shouldn't happen, but fix anyway)
//         const pendingItems = allForms.filter((form: any) => {
//             const hasVersion = !!(form._version && form._version > 0);
//             const hasOwner = !!(form as any).owner;
//             const correctOwner = ((form as any).owner === currentUserId);

//             // Items that need fixing:
//             // - No version (not synced) AND (no owner OR wrong owner)
//             // - Has version but wrong owner (data integrity issue)
//             return (!hasVersion && (!hasOwner || !correctOwner)) || (hasVersion && !correctOwner);
//         });

//         if (pendingItems.length === 0) {
//             console.log('   ✅ No pending items need owner field fixes');
//             return;
//         }

//         console.log(`   📋 Found ${pendingItems.length} items that need owner field fixes`);
//         console.log('   🔧 Fixing owner fields to enable sync...');

//         // Update each item to explicitly set the correct owner
//         let fixedCount = 0;
//         let syncedCount = 0;

//         for (const item of pendingItems) {
//             try {
//                 const itemId = item.id.substring(0, 20);
//                 const currentOwner = (item as any).owner || 'N/A';

//                 console.log(`   🔄 Fixing item ${itemId}... (current owner: ${currentOwner})`);

//                 // CRITICAL: Set owner field using safetyFormService.update
//                 // This ensures the owner field is included in the update
//                 // DataStore should automatically assign owner based on auth context, but
//                 // for items created before auth, we need to explicitly set it

//                 // Use the update service which uses copyOf internally
//                 await safetyFormService.update(item.id, {
//                     // Explicitly include owner in the update (cast to any because
//                     // the generated `SafetyForm` model may not include an `owner` field
//                     // in the TypeScript types. We still attempt to set it at runtime
//                     // when available to assist with legacy sync scenarios.
//                     ...(currentUserId ? ({ owner: currentUserId } as any) : {}),
//                     // updatedAt: new Date().toISOString(),
//                 } as any);

//                 // Wait a moment for DataStore to process
//                 await new Promise(resolve => setTimeout(resolve, 500));

//                 // Re-query to verify owner was set
//                 const reQueried = await DataStore.query(Users, item.id);
//                 const actualOwner = (reQueried as any)?.owner;
//                 const actualVersion = (reQueried as any)?._version;

//                 console.log(`   📊 Item ${itemId} status:`);
//                 console.log(`      Owner (from query): ${actualOwner || 'N/A'}`);
//                 console.log(`      Version: ${actualVersion || 'N/A'}`);
//                 console.log(`      Expected owner: ${currentUserId}`);
//                 if (actualOwner === currentUserId) {
//                     console.log(`   ✅ Owner field correctly set to: ${actualOwner}`);
//                     if (actualVersion && actualVersion > 0) {
//                         console.log(`   ✅ Item ${itemId} now synced (version ${actualVersion})`);
//                         syncedCount++;
//                     } else {
//                         console.log(`   ⏳ Item ${itemId} owner fixed, waiting for sync (version will be assigned soon)`);
//                     }
//                 } else {
//                     console.error(`   ❌ Owner field NOT set correctly!`);
//                     console.error(`      Expected: ${currentUserId}`);
//                     console.error(`      Got: ${actualOwner || 'N/A'}`);
//                     console.error(`   ⚠️ Trying alternative approach: direct DataStore.save with owner...`);

//                     // Alternative: Try direct DataStore.save with owner explicitly set
//                     try {
//                         await DataStore.save(
//                             Users.copyOf(reQueried || item, (u: MutableModel<UsersType>) => {
//                                 // Force set owner field (use `any` to avoid typing issues)
//                                 (u as any).owner = currentUserId;
//                                 // (u as any).updatedAt = new Date().toISOString();
//                             })
//                         );

//                         // Check again
//                         const reQueried2 = await DataStore.query(Users, item.id);
//                         const actualOwner2 = (reQueried2 as any)?.owner;

//                         if (actualOwner2 === currentUserId) {
//                             console.log(`   ✅ Owner field set using alternative approach: ${actualOwner2}`);
//                         } else {
//                             console.error(`   ❌ Alternative approach also failed. Owner: ${actualOwner2 || 'N/A'}`);
//                             console.error(`   ⚠️ This item may not sync - DataStore may be managing owner field automatically`);
//                         }
//                     } catch (altError: any) {
//                         console.error(`   ❌ Alternative approach failed:`, altError?.message);
//                     }
//                 }
//                 fixedCount++;

//             } catch (error: any) {
//                 console.error(`   ❌ Error fixing owner for item ${item.id.substring(0, 20)}:`, error?.message);
//                 console.error('   Error details:', error);
//             }
//         }

//         console.log(`\n   ✅ Owner field fixes completed:`);
//         console.log(`      - Fixed: ${fixedCount} items`);
//         console.log(`      - Synced: ${syncedCount} items`);
//         console.log(`      - Pending: ${fixedCount - syncedCount} items (will sync within 20-30 seconds)`);
//         console.log('   💡 All items now have correct owner field and should sync');

//     } catch (error: any) {
//         console.error('❌ Error fixing owner fields:', error?.message || error);
//         console.error('   Stack:', error?.stack);
//     }
// }

// // Reset flag when user signs out
// async function resetDataStoreRestartFlag() {
//     restartAttempted = false;
//     lastUserId = null;
//     console.log('🔄 DataStore restart flag reset');
// }





  /* =======================
     DATASTORE LIFECYCLE
     ======================= */

  async function cleanupDataStore() {
    try {
      await DataStore.stop();
      console.log("🛑 DataStore stopped");
    } catch (e) {
      console.error("Error stopping DataStore", e);
    }
  }

  async function clearLocalData() {
    try {
      await DataStore.clear();
      console.log("🧹 DataStore cleared");
      fetchUsers();
    } catch (e) {
      console.error("Error clearing DataStore", e);
    }
  }

  function setupNetworkListener() {
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);
  }

  function removeNetworkListener() {
    window.removeEventListener("online", updateNetworkStatus);
    window.removeEventListener("offline", updateNetworkStatus);
  }

  function updateNetworkStatus() {
    setIsOnline(navigator.onLine);
    console.log("🌐 Network status:", navigator.onLine ? "Online" : "Offline");
  }

  /* =======================
     AUTH / GROUPS
     ======================= */

  async function loadCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setEmail(user.attributes.email);
    } catch {
      console.log("Not authenticated");
    }
  }



  /** ✅ Amplify Gen 1 – Get Cognito User Groups */
  async function getUserGroups() {
    try {
      const session = await Auth.currentSession();
      const accessToken = session.getAccessToken();
      const payload = accessToken.payload;

      const cognitoGroups = payload["cognito:groups"];

      if (Array.isArray(cognitoGroups)) {
        console.log("User belongs to groups:", cognitoGroups);
        setGroups(cognitoGroups);
      } else {
        console.log("User does not belong to any groups");
        setGroups([]);
      }
    } catch (error) {
      console.error("Error fetching user groups:", error);
      setGroups([]);
    }
  }

  /* =======================
   USERS CRUD
  ======================= */

  async function fetchUsers() {
    try {
      const allUsers = await DataStore.query(Users);
      setUsers(allUsers);
    } catch (err) {
      console.log("error fetching users:", err);
    }
  }

  async function addUser() {
    if (!value.trim() || !email) return;

    try {
      await DataStore.save(
        new Users({
          name: value,
          email, // REQUIRED FIELD
        })
      );

      setValue("");
    } catch (err) {
      console.log("error creating user:", err);
    }
  }

  async function handleDelete(user: Users) {
    try {
      await DataStore.delete(user);
    } catch (err) {
      console.log("error deleting user:", err);
    }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", textAlign: "left" }}>
      {/* OPTIONAL: show groups (for debugging / role-based UI) */}
      {/* Status */}
      <div style={{ fontSize: "12px", marginBottom: "10px", color: "#666" }}>
        🌐 {isOnline ? "Online (Sync Active)" : "Offline (Local Only)"}
      </div>

      {/* Groups */}
      {groups.length > 0 && (
        <div style={{ fontSize: "12px", color: "#666", marginBottom: "10px" }}>
          Groups: {groups.join(", ")}
        </div>
      )}

      {/* Input */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter user name"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
        <button
          onClick={addUser}
          style={{
            padding: "10px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit
        </button>
      </div>

      {/* Actions */}
      {<button
        onClick={clearLocalData}
        style={{
          marginBottom: "10px",
          fontSize: "12px",
          background: "#f5f5f5",
          border: "1px solid #ddd",
          padding: "6px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clear Local Cache
      </button> }

      <h3>User List</h3>

      <ul style={{ paddingLeft: "20px" }}>
        {users.map((u) => (
          <li
            key={u.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "6px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>{u.name}</span>
            <FaTrash
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => handleDelete(u)}
            />
          </li>
        ))}
      </ul>

    </div>
  );
}
