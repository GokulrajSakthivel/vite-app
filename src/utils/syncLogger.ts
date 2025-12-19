// import { DataStore } from '@aws-amplify/datastore';
// import { Hub } from '@aws-amplify/core';




// export function logSyncOperation(operation: 'CREATE' | 'UPDATE' | 'DELETE', model: string, id: string, data?: any) {
//     console.log(`📝 [${operation}] ${model}`, {
//         id,
//         timestamp: new Date().toISOString(),
//         data: data ? Object.keys(data).join(', ') : 'N/A',
//     });

//     // Config check removed - it's optional and was causing build issues
//     // The sync will work if Amplify is properly configured
// }