// /**
//  * Deep Sync Diagnostic - Find out why DataStore isn't syncing
//  */
// import { DataStore } from '@aws-amplify/datastore';
// import {  API, Auth } from 'aws-amplify';

// export async function deepSyncDiagnostic() {
//   console.log('🔍 DEEP SYNC DIAGNOSTIC');
//   console.log('='.repeat(50));

//   // 1. Check Amplify configuration
//   console.log('\n1. AMPLIFY CONFIGURATION:');
//   try {
//     //   const aws: any = Amplify.getConfig();

//     //   console.log('   GraphQL Endpoint:', aws.API?.GraphQL ? (aws.API.GraphQL as any).endpoint : '❌ MISSING');
//     //   console.log('   Region:', aws.API?.GraphQL ? (aws.API.GraphQL as any).region : '❌ MISSING');
//     //   console.log('   Auth Type:', aws.API?.GraphQL ? (aws.API.GraphQL as any).defaultAuthMode : '❌ MISSING');
//     //   console.log('   User Pool ID:', aws.Auth?.userPoolId || '❌ MISSING');
//     //   console.log('   User Pool Client ID:', aws.Auth?.userPoolWebClientId || '❌ MISSING');

//     //   if (!aws.API?.GraphQL) {
//     //     console.error('   ❌ CRITICAL: No GraphQL endpoint - sync will NOT work!');
//     //   }
//     const apiConfig = (API as any)?.Auth._config;
//     const authConfig = (Auth as any)?._config;

//     console.log("API",API);

//     console.log('   GraphQL Endpoint:', apiConfig?.aws_appsync_graphqlEndpoint || '❌ MISSING');
//     console.log('   Region:', apiConfig?.aws_appsync_region || '❌ MISSING');
//     console.log('   Auth Type:', apiConfig?.aws_appsync_authenticationType || '❌ MISSING');

//     console.log('   User Pool ID:', authConfig?.userPoolId || '❌ MISSING');
//     console.log('   User Pool Client ID:', authConfig?.userPoolWebClientId || '❌ MISSING');

//     if (!apiConfig?.aws_appsync_graphqlEndpoint) {
//       console.error('   ❌ CRITICAL: No GraphQL endpoint – DataStore will NOT sync');
//     }
//   } catch (e: any) {
//     console.error('   ❌ Error reading Amplify config:', e?.message);
//   }

//   // 2. Check Amplify.configure() result
//   console.log('\n2. AMPLIFY.CONFIGURE() RESULT:');
//   try {
//     const apiConfig = (API as any)?.Auth._config;
//     const authConfig = (Auth as any)?._config;

//     if (apiConfig?.aws_appsync_graphqlEndpoint) {
//       console.log('   Config object: ✅ Exists');
//       console.log('   API.GraphQL: ✅ Configured');
//       console.log('     Endpoint:', apiConfig.aws_appsync_graphqlEndpoint);
//       console.log('     Region:', apiConfig.aws_appsync_region);
//       console.log('     Auth Type:', apiConfig.aws_appsync_authenticationType);
//     } else {
//       console.log('   Config object: ❌ Missing or incomplete');
//       console.log('   API.GraphQL: ❌ Missing');
//       console.log('   Auth.Cognito: ❌ Missing');
//     }
//   } catch (e: any) {
//     console.warn('   ⚠️ Could not read Amplify config:', e?.message || String(e));
//     console.log('   Config object: ❌ Error reading');
//     console.log('   API.GraphQL: ❌ Missing');
//     console.log('   Auth.Cognito: ❌ Missing');
//   }

//   // 3. Check localStorage for auth tokens
//   console.log('\n3. AUTHENTICATION TOKENS:');
//   const cognitoKeys = Object.keys(localStorage).filter(key =>
//     key.includes('CognitoIdentityServiceProvider') ||
//     key.includes('aws-amplify') ||
//     key.includes('Cognito')
//   );
//   console.log('   Cognito keys found:', cognitoKeys.length);
//   if (cognitoKeys.length === 0) {
//     console.error('   ❌ CRITICAL: No auth tokens found!');
//     console.error('   ❌ You must be SIGNED IN for sync to work!');
//   } else {
//     console.log('   ✅ Auth tokens present');
//     cognitoKeys.slice(0, 3).forEach(key => {
//       console.log(`     - ${key.substring(0, 50)}...`);
//     });
//   }

//   // 4. Check DataStore status
//   console.log('\n4. DATASTORE STATUS:');
//   try {
//     // Try to query to see if DataStore is working
//     const { Users } = await import('../models/index.js');
//     // Use correct DataStore.query syntax - no options object, just the model
//     const testQuery = await DataStore.query(Users);
//     console.log('   DataStore.query(): ✅ Working');
//     console.log('   Local items:', testQuery.length);
//     if (testQuery.length > 0) {
//       const firstItem = testQuery[0] as any;
//       console.log('   Sample item version:', firstItem._version || 'N/A (local only)');
//       console.log('   Sample item lastChanged:', firstItem._lastChangedAt || 'N/A');
//     }
//   } catch (e: any) {
//     console.error('   ❌ DataStore.query() failed:', e?.message || String(e));
//     console.error('   Error details:', e);
//     console.error('   Error type:', e?.constructor?.name || typeof e);
//     console.log('   ℹ️ This might be normal if DataStore is not fully initialized');
//   }

//   // 5. Check network
//   console.log('\n5. NETWORK STATUS:');
//   console.log('   Online:', navigator.onLine ? '✅ Yes' : '❌ No');
//   if (!navigator.onLine) {
//     console.error('   ❌ CRITICAL: You are offline! Sync requires internet.');
//   }

//   // 6. Check for sync errors in console
//   console.log('\n6. SYNC ERRORS:');
//   console.log('   Check browser console for:');
//   console.log('     - "DataStore - Data won\'t be synchronized"');
//   console.log('     - "No GraphQL endpoint configured"');
//   console.log('     - Any red error messages');

//   // 7. Test sync manually
//   console.log('\n7. MANUAL SYNC TEST:');
//   console.log('   To test sync:');
//   console.log('   1. Make sure you are SIGNED IN');
//   console.log('   2. Create a NEW PTP form');
//   console.log('   3. Check console for sync events');
//   console.log('   4. Wait 30 seconds');
//   console.log('   5. Check DynamoDB table');

//   // 8. Check DataStore internal state
//   console.log('\n8. DATASTORE INTERNAL STATE:');
//   try {
//     // DataStore doesn't expose sync status directly, but we can check IndexedDB
//     const dbName = 'amplify-datastore';
//     const request = indexedDB.open(dbName);
//     request.onsuccess = () => {
//       console.log('   IndexedDB:', '✅ Accessible');
//       const db = request.result;
//       console.log('   Object stores:', db.objectStoreNames.length);
//     };
//     request.onerror = () => {
//       console.warn('   IndexedDB:', '⚠️ Could not access');
//     };
//   } catch (e) {
//     console.warn('   IndexedDB check failed');
//   }

//   console.log('\n' + '='.repeat(50));
//   console.log('💡 RECOMMENDATIONS:');
//   console.log('1. Ensure you are SIGNED IN (check #3 above)');
//   console.log('2. Verify GraphQL endpoint exists (check #1 above)');
//   console.log('3. Check browser console for DataStore errors');
//   console.log('4. Try signing out and signing in again');
//   console.log('5. Create a NEW form after signing in');
//   console.log('='.repeat(50));
// }

// // Expose globally
// if (typeof window !== 'undefined') {
//   (window as any).deepSyncDiagnostic = deepSyncDiagnostic;
//   console.log('💡 Run deepSyncDiagnostic() in console for detailed sync analysis');
// }
