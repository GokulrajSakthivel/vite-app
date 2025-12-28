import React, { useState } from "react";
import { DataStore } from "aws-amplify";
import { Master, MasterItem, PtpTemplateDef, PtpOptionsInfo, HazardandMeasuresControlDef } from "./models";


/*
  IMPORTANT:
  - Replace the import path below with the actual path where your Amplify DataStore models live.
  - The file assumes you have two DataStore models: `Master` and `MasterItem`.
    Adjust field names in the `toModelMaster` / `toModelMasterItem` helpers if your model fields differ.
*/


type Props = {
  // Not used since master/masterItem are embedded below, but kept for completeness
  master?: Array<Record<string, any>>;
  masterItem?: Array<Record<string, any>>;
};


export default function AddMasterAndItemsWithDataStore(_: Props) {
  const [isWorking, setIsWorking] = useState(false);
  const [progressMessage, setProgressMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [savedMasters, setSavedMasters] = useState<any[]>([]);
  const [savedItems, setSavedItems] = useState<any[]>([]);
  const [failedSaves, setFailedSaves] = useState<string[]>([]);

  const [ptpTemplateOptions , setPtpTemplateOptions] = useState<PtpTemplateDef>();


  const master = [
    {
      "masterID": {
        "S": "14f3d7b9-2e8a-4c61-9a05-c1b6e0d41420"
      },
      "categoryName": {
        "S": "USER-ROLE"
      },
      "displayOrder": {
        "N": "0"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "User Group"
      },
      "masterName": {
        "S": "Group"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
      },
      "categoryName": {
        "S": "REQUIRED-PERMITS"
      },
      "displayOrder": {
        "N": "0"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "CRITICAL ACTIVITY PERMITS"
      },
      "masterName": {
        "S": "PERMITS"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "03b71a8d-6c24-4b39-9e51-4f0d2a8c7b03"
      },
      "categoryName": {
        "S": "REQUIRED-CHECKLIST"
      },
      "displayOrder": {
        "N": "0"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "REQUIRED CHECKLIST"
      },
      "masterName": {
        "S": "CHECKLIST"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "04d6f2a1-9e45-43bc-8a71-5c9b1f0d4e04"
      },
      "categoryName": {
        "S": "REQUIRED-PPE"
      },
      "displayOrder": {
        "N": "0"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "TASK-SPECIFIC REQUIRED PPE"
      },
      "masterName": {
        "S": "PPE"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "09c19e8b-7e1f-4F83-8f59-6a4d2b9e1c15"
      },
      "categoryName": {
        "S": "REQUIRED-PPE"
      },
      "displayOrder": {
        "N": "2"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": ""
      },
      "masterName": {
        "S": "PPE-HP"
      },
      "masterTitle": {
        "S": "HEAD PROTECTION"
      }
    },
    {
      "masterID": {
        "S": "05c19e8b-7d2f-4a63-8f05-6a4d2b9e1c05"
      },
      "categoryName": {
        "S": "REQUIRED-PPE"
      },
      "displayOrder": {
        "N": "2"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": ""
      },
      "masterName": {
        "S": "PPE-HP"
      },
      "masterTitle": {
        "S": "HAND PROTECTION"
      }
    },
    {
      "masterID": {
        "S": "07e2f1a9-5c6d-4b38-9e7a-0d8c4b3a0707"
      },
      "categoryName": {
        "S": "REQUIRED-PPE"
      },
      "displayOrder": {
        "N": "3"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": ""
      },
      "masterName": {
        "S": "PPE-FP"
      },
      "masterTitle": {
        "S": "FOOT PROTECTION"
      }
    },
    {
      "masterID": {
        "S": "08b3a7c9-2f6d-4e8a-91c5-d0f4b1e30808"
      },
      "categoryName": {
        "S": "REQUIRED-PPE"
      },
      "displayOrder": {
        "N": "4"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": ""
      },
      "masterName": {
        "S": "PPE-RP"
      },
      "masterTitle": {
        "S": "RESPIRATORY PROTECTION"
      }
    },
    {
      "masterID": {
        "S": "09d8a2f7-5c1e-4b69-8f03-4e1c9b6a0909"
      },
      "categoryName": {
        "S": "REQUIRED-PPE"
      },
      "displayOrder": {
        "N": "5"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Identify System Used"
      },
      "masterName": {
        "S": "PPE-FPS"
      },
      "masterTitle": {
        "S": "FALL PROTECTION SYSTEM"
      }
    },
    {
      "masterID": {
        "S": "0a1b9c3d-4e5f-468a-9b2c-7d8e0f1a0a10"
      },
      "categoryName": {
        "S": "REQUIRED-PPE"
      },
      "displayOrder": {
        "N": "6"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": ""
      },
      "masterName": {
        "S": "PPE-EP"
      },
      "masterTitle": {
        "S": "EYE PROTECTION"
      }
    },
    {
      "masterID": {
        "S": "0b7e2c9a-6d1f-4b38-95a4-3c8f0e2d0b11"
      },
      "categoryName": {
        "S": "REQUIRED-PPE"
      },
      "displayOrder": {
        "N": "7"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": ""
      },
      "masterName": {
        "S": "PPE-SC"
      },
      "masterTitle": {
        "S": "SPECIAL CLOTHING"
      }
    },
    {
      "masterID": {
        "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
      },
      "categoryName": {
        "S": "HAZARD"
      },
      "displayOrder": {
        "N": "0"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "REQUIRED CHECKLIST"
      },
      "masterName": {
        "S": "HAZARD"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "0d4c2b9f-6e7a-4d18-83a5-1e0f9c2b0d13"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "1"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Overhead Utilities"
      },
      "masterName": {
        "S": "HCM-OU"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "0f8e1c5a-9b2d-4e36-84f7-0a6c3d2b0f15"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "2"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Crane or Other Lifting Equip"
      },
      "masterName": {
        "S": "HCM-COLE"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "10a7c2d9-5e8f-4b30-91a6-e2f3d0c71016"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "5"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Underground Utilities"
      },
      "masterName": {
        "S": "HCM-UU"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "11b9e8d7-6c0a-4f12-9a53-2d1c7e8f1117"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "3"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Excavations"
      },
      "masterName": {
        "S": "HCM-El"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "12d6a9f2-8e3c-45b7-9c10-f1b0a4d61218"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "4"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Electrical"
      },
      "masterName": {
        "S": "HCM-Ex"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "13e4f9b1-7a2d-4c80-86d5-9a0c8b3f1319"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "6"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Fire Hazard"
      },
      "masterName": {
        "S": "HCM-FH"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "20b4f9a7-1d2e-4c50-8a63-5c0e9d8b2032"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "7"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Vehicular Traffic Deliveries (CAP)"
      },
      "masterName": {
        "S": "HCM-VTHE"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "3a7c2e91-6f44-4b3a-9d0a-2e1c8f7b1a10"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "8"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Noise > 85 db"
      },
      "masterName": {
        "S": "HCM-N85"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "0c1e57d6-9a28-4f94-8b03-ae2c4b8d317a"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "9"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Hand & Power Tools"
      },
      "masterName": {
        "S": "HCM-HPT"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "d9a6b8e4-1f50-4d63-8a7c-2e5c037b1929"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "10"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Hand Hazards"
      },
      "masterName": {
        "S": "HCM-HH"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "4a71b8f2-d9c3-4e60-9a05-0c6d51e72377"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "11"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Manual Lifting"
      },
      "masterName": {
        "S": "HCM-ML"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "5d1c8e92-3a74-4f60-9b12-7e0a6c4f1281"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "12"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Ladders"
      },
      "masterName": {
        "S": "HCM-La"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "a9c3f5e1-6d42-4b80-8a71-2e7f019c3d52"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "13"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Slips, Trips, & Falls"
      },
      "masterName": {
        "S": "HCM-STF"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "0e4a9b71-2f83-4d65-9c10-b7a5e6d12893"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "14"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Pinch Points"
      },
      "masterName": {
        "S": "HCM-PP"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "c2b7d91e-8f30-4a54-9b06-5e1c7a0d6424"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "15"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Working with Chemicals"
      },
      "masterName": {
        "S": "HCM-WC"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "f8a31b09-5d72-4e64-8c90-2b7d16a4e135"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "16"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Abestos or Lead Paint Potential (CAP)"
      },
      "masterName": {
        "S": "HCM-ALPP"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "7d9e4c2a-1b65-4f08-9a73-6e5b0c812f46"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "17"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Heat Stress Potential"
      },
      "masterName": {
        "S": "HCM-HSP"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "b4e17d5a-8c39-4a21-9f60-03c2a96b7e57"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "18"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Environmental"
      },
      "masterName": {
        "S": "HCM-En"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "31c9e0b6-7d2f-4e54-8a19-f5a4b2d68708"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "20"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Adjacent Work Processes"
      },
      "masterName": {
        "S": "HCM-AWP"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "d5b4c9a2-0f87-4b63-9e15-1a7c8e326b79"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "21"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Barricades/Covers"
      },
      "masterName": {
        "S": "HCM-BC"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "8a9f20e1-4d6c-4f75-8b03-7e1c53a96d10"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "19"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Natural or Site Hazards"
      },
      "masterName": {
        "S": "HCM-NSH"
      },
      "masterTitle": {
        "S": ""
      }
    },
    {
      "masterID": {
        "S": "9b0e4f8a-1d52-4c69-8a73-26e7d5c93121"
      },
      "categoryName": {
        "S": "HAZARDS-CONTROL-MEASURE"
      },
      "displayOrder": {
        "N": "22"
      },
      "isActive": {
        "BOOL": true
      },
      "MasterDescription": {
        "S": "Housekeeping"
      },
      "masterName": {
        "S": "HCM-HK"
      },
      "masterTitle": {
        "S": ""
      }
    }
  ]


  const masterItem = [{
    "itemID": {
      "S": "1f9a5c3e-8b2d-4f41-90a7-d6e1b0c21f31"
    },
    "masterID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Confined Space"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "e5f3a7b9-2d4e-4a05-9c61-1b6d8f0c9147"
    },
    "masterID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Hot Work"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "d4e2f6a8-b1c3-4a61-82d9-5e7b0c9f8046"
    },
    "masterID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Ground Disturbance (over 12”)"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "26e3c0b9-d5f8-4a41-9b76-1a2c7d6e2638"
    },
    "masterID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Pressure Testing"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "90d8e2c4-7a5b-4f61-9c03-1b6d8f3e4c42"
    },
    "masterID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Traffic"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "5"
    }
  },
  {
    "itemID": {
      "S": "8f7c9d1e-6a3b-4a02-85b4-0e2f5d8c3b41"
    },
    "masterID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Guard Rail Removal"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "6"
    }
  },
  {
    "itemID": {
      "S": "7e6b8c0d-5f9a-4a61-93e2-1d7c4b2f2a40"
    },
    "masterID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Excavation"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "7"
    }
  },
  {
    "itemID": {
      "S": "9a4f1e20-3b6c-4d92-8f75-bc10e7a5d823"
    },
    "masterID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Energy Isolation/LOTO"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "8"
    }
  },
  {
    "itemID": {
      "S": "f8b0c1a2-7d49-4f30-9e6a-12c4b5a7d901"
    },
    "masterID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "ICRA"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "9"
    }
  },
  {
    "itemID": {
      "S": "a92f7e1c-3d6b-4f85-8a0e-5c4d1b9e72f6"
    },
    "masterID": {
      "S": "03b71a8d-6c24-4b39-9e51-4f0d2a8c7b03"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Backfill Checklist"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "23d7b8c2-9e0a-4a41-8f53-1e5c0b623335"
    },
    "masterID": {
      "S": "03b71a8d-6c24-4b39-9e51-4f0d2a8c7b03"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Demo Checklist"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "24f0a9b8-5e3d-4c71-91a2-7d6c1b042436"
    },
    "masterID": {
      "S": "03b71a8d-6c24-4b39-9e51-4f0d2a8c7b03"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Exploratory Zone Checklist"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "25b1d8f4-c3e9-4a06-8f72-0e5c6a7b2537"
    },
    "masterID": {
      "S": "03b71a8d-6c24-4b39-9e51-4f0d2a8c7b03"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Cranes Checklist"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "26e3c0b9-d5f8-4a41-9b76-1a2c7d6e2638"
    },
    "masterID": {
      "S": "03b71a8d-6c24-4b39-9e51-4f0d2a8c7b03"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Utility Installation Checklist"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "5"
    }
  },
  {
    "itemID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "masterID": {
      "S": "03b71a8d-6c24-4b39-9e51-4f0d2a8c7b03"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Excavation Zone Checklist"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "6"
    }
  },
  {
    "itemID": {
      "S": "a2d9f5b3-4e10-4c8a-9b61-7f30e1d82544"
    },
    "masterID": {
      "S": "03b71a8d-6c24-4b39-9e51-4f0d2a8c7b03"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Hydro Checklist"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "7"
    }
  },
  {
    "itemID": {
      "S": "4e2c8a10-9b3f-4c51-8d72-a1f7e5b69033"
    },
    "masterID": {
      "S": "03b71a8d-6c24-4b39-9e51-4f0d2a8c7b03"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Pressure Testing Checklist"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "8"
    }
  },
  {
    "itemID": {
      "S": "6f91e2b0-8c74-4e31-9a0d-d3c7b512fa55"
    },
    "masterID": {
      "S": "09c19e8b-7e1f-4F83-8f59-6a4d2b9e1c15"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Hard Hat"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "b3e7a0c9-1d42-4f68-8b5a-7d20e19c6046"
    },
    "masterID": {
      "S": "09c19e8b-7e1f-4F83-8f59-6a4d2b9e1c15"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Ear Plugs / Muffs"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "3a2d4e6f-8b9c-4a15-9c70-1e5b7d0c8636"
    },
    "masterID": {
      "S": "05c19e8b-7d2f-4a63-8f05-6a4d2b9e1c05"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Cut Resistant Gloves"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "4b3e5f7a-9c0d-4a61-82b9-6e1d8c2f9737"
    },
    "masterID": {
      "S": "05c19e8b-7d2f-4a63-8f05-6a4d2b9e1c05"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": " Welder Gloves "
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "29e1c3d5-7a9f-4b60-91e2-0b8c6a4f7535"
    },
    "masterID": {
      "S": "05c19e8b-7d2f-4a63-8f05-6a4d2b9e1c05"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Nitrile Gloves"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "07c9e1a3-d5b7-4a24-9f60-8b2c6d4e5333"
    },
    "masterID": {
      "S": "05c19e8b-7d2f-4a63-8f05-6a4d2b9e1c05"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Rubber Gloves"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "e5a7c9d1-f3b4-4a80-9e26-8b2d0c6f3131"
    },
    "masterID": {
      "S": "05c19e8b-7d2f-4a63-8f05-6a4d2b9e1c05"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Elect. Insulated Glov"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "5"
    }
  },
  {
    "itemID": {
      "S": "d4f6a8b0-1c3e-4a52-87d9-5e2c9b703030"
    },
    "masterID": {
      "S": "05c19e8b-7d2f-4a63-8f05-6a4d2b9e1c05"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Cut-Resistant Arm Sleeves"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "6"
    }
  },
  {
    "itemID": {
      "S": "90c1f8e4-7d6b-4a32-8b59-0e5d2a3c6626"
    },
    "masterID": {
      "S": "07e2f1a9-5c6d-4b38-9e7a-0d8c4b3a0707"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Sturdy Work Boots"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "a1b3c5d7-e9f0-4a61-93e2-8c4d6b0f7727"
    },
    "masterID": {
      "S": "07e2f1a9-5c6d-4b38-9e7a-0d8c4b3a0707"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Safety Toe Boot"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "b2d4e6f8-0a1c-4f75-89b3-5d9e7c2a8828"
    },
    "masterID": {
      "S": "07e2f1a9-5c6d-4b38-9e7a-0d8c4b3a0707"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Rubber Boots"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "c3e5f7a9-b1d2-4a04-9c68-0e8d6b4f9929"
    },
    "masterID": {
      "S": "07e2f1a9-5c6d-4b38-9e7a-0d8c4b3a0707"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Dielectric Footwear"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "8f5d0b7a-9e2c-4a63-91c4-6d3e1b8f5525"
    },
    "masterID": {
      "S": "08b3a7c9-2f6d-4e8a-91c5-d0f4b1e30808"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Emerg. Escape"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "5"
    }
  },
  {
    "itemID": {
      "S": "90c1f8e4-7d6b-4a32-8b59-0e5d2a3c6626"
    },
    "masterID": {
      "S": "08b3a7c9-2f6d-4e8a-91c5-d0f4b1e30808"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "SCBA "
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "a1b3c5d7-e9f0-4a61-93e2-8c4d6b0f7727"
    },
    "masterID": {
      "S": "08b3a7c9-2f6d-4e8a-91c5-d0f4b1e30808"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Supplied Air Resp. "
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "b2d4e6f8-0a1c-4f75-89b3-5d9e7c2a8828"
    },
    "masterID": {
      "S": "08b3a7c9-2f6d-4e8a-91c5-d0f4b1e30808"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Air Purifying Resp."
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "25b1d8f4-c3e9-4a06-8f72-0e5c6a7b2537"
    },
    "masterID": {
      "S": "08b3a7c9-2f6d-4e8a-91c5-d0f4b1e30808"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Dust Mask"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "90c1f8e4-7d6b-4a32-8b59-0e5d2a3c6626"
    },
    "masterID": {
      "S": "09d8a2f7-5c1e-4b69-8f03-4e1c9b6a0909"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Harness"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "8f5d0b7a-9e2c-4a63-91c4-6d3e1b8f5525"
    },
    "masterID": {
      "S": "09d8a2f7-5c1e-4b69-8f03-4e1c9b6a0909"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Double Lanyard Required"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "7e9c2a6f-1d8b-4a54-8f03-5b7e4c0d4424"
    },
    "masterID": {
      "S": "09d8a2f7-5c1e-4b69-8f03-4e1c9b6a0909"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Anchorage Point Avail."
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "bd4e7c9f-a3b1-4f60-9a85-2e0c5d8b3323"
    },
    "masterID": {
      "S": "09d8a2f7-5c1e-4b69-8f03-4e1c9b6a0909"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Additional Anchorage Connection"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "5c0a9e3d-7f6b-4a18-82e5-d4b1c2f32222"
    },
    "masterID": {
      "S": "09d8a2f7-5c1e-4b69-8f03-4e1c9b6a0909"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Needed (i.e. Cross arm strap, etc.)"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "5"
    }
  },
  {
    "itemID": {
      "S": "c92b7d51-4a1e-4c93-8f60-bd30e7a51877"
    },
    "masterID": {
      "S": "09d8a2f7-5c1e-4b69-8f03-4e1c9b6a0909"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Fall Clearance Distance Adequate"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "6"
    }
  },
  {
    "itemID": {
      "S": "4b1f8d9a-6e3c-4a52-97b0-5d2e0c1f1b21"
    },
    "masterID": {
      "S": "09d8a2f7-5c1e-4b69-8f03-4e1c9b6a0909"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Fall Clearance Distance Adequate"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "7"
    }
  },
  {
    "itemID": {
      "S": "3a5e2c8b-9d7f-4b40-81a6-0e1c6d7f0a20"
    },
    "masterID": {
      "S": "0a1b9c3d-4e5f-468a-9b2c-7d8e0f1a0a10"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Safety Glasses"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "29a7d8f1-c5b9-4a63-9e24-6c0e3b219919"
    },
    "masterID": {
      "S": "0a1b9c3d-4e5f-468a-9b2c-7d8e0f1a0a10"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Face Shield"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "07d8c4b2-9e1a-4a56-90f7-3b6e5c1a7717"
    },
    "masterID": {
      "S": "0a1b9c3d-4e5f-468a-9b2c-7d8e0f1a0a10"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Chemical Goggles"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "f6a1e9c3-7d8b-4f24-85c6-0b2d4a7e6616"
    },
    "masterID": {
      "S": "0a1b9c3d-4e5f-468a-9b2c-7d8e0f1a0a10"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Welding Hood"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "e5c7a0f9-8b6d-4a13-9d24-1b3e2c6f5515"
    },
    "masterID": {
      "S": "0b7e2c9a-6d1f-4b38-95a4-3c8f0e2d0b11"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Coveralls"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "f6a1e9c3-7d8b-4f24-85c6-0b2d4a7e6616"
    },
    "masterID": {
      "S": "0b7e2c9a-6d1f-4b38-95a4-3c8f0e2d0b11"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Tyvek Disposable Suits"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "24f0a9b8-5e3d-4c71-91a2-7d6c1b042436"
    },
    "masterID": {
      "S": "0b7e2c9a-6d1f-4b38-95a4-3c8f0e2d0b11"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Proper Safety Vest (for Task)"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "a1f4c8e2-6d3b-4a9c-9c41-2e8d7f5b9011"
    },
    "masterID": {
      "S": "0b7e2c9a-6d1f-4b38-95a4-3c8f0e2d0b11"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Rain Suit"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "b2a9d4c1-7e5f-4b38-8f62-1c0e9d3a2212"
    },
    "masterID": {
      "S": "0b7e2c9a-6d1f-4b38-95a4-3c8f0e2d0b11"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Shoe Coverings"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "5"
    }
  },
  {
    "itemID": {
      "S": "c3e8b1d6-9f24-4a70-9a51-0d7c2b5e3313"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Overhead Utilities"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-OU"
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "d4b2f9a7-1e8c-4d5b-86a2-e3c0f9174414"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Crane or Other Lifting Equip. (CAP)"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "16a3f9e7-bc5d-4a20-8f1e-d2c0b4a91622"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Underground Utilities  (CAP) "
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-Ex"
    },
    "displayOrder": {
      "N": "5"
    }
  },
  {
    "itemID": {
      "S": "17b6d4a9-e2c5-4f18-9a07-3c1f0b8d1723"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Electrical  (CAP)"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-El"
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "18d9c7f0-2e1b-4a53-8b64-f5a3d1c91824"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Excavations"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-UU"
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "19e5b4c8-0f3d-4a92-86d7-1c2b9a6e1925"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Fire Hazard (CAP)"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-FH"
    },
    "displayOrder": {
      "N": "6"
    }
  },
  {
    "itemID": {
      "S": "1a7d8f1b-9e0c-4a52-83f6-b5d2c6e41a26"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Vehicular Traffic Deliveries (CAP)"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-VTHE"
    },
    "displayOrder": {
      "N": "7"
    }
  },
  {
    "itemID": {
      "S": "1b9c6d4a-f7e5-4b01-8a23-0c1e2f3d1b27"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Noise > 85db"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-N85"
    },
    "displayOrder": {
      "N": "8"
    }
  },
  {
    "itemID": {
      "S": "1d6e9f0b-7c2a-4a38-91d5-b4f3e8c11d29"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Hand & Power Tools"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-HPT"
    },
    "displayOrder": {
      "N": "9"
    }
  },
  {
    "itemID": {
      "S": "23d7b8c2-9e0a-4a41-8f53-1e5c0b623335"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Hand Hazards"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-HH"
    },
    "displayOrder": {
      "N": "10"
    }
  },
  {
    "itemID": {
      "S": "1f9a5c3e-8b2d-4f41-90a7-d6e1b0c21f31"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Manual Lifting"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-ML"
    },
    "displayOrder": {
      "N": "11"
    }
  },
  {
    "itemID": {
      "S": "22a1b9e6-f3d4-4c80-9a52-0e7c5b122234"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Ladders"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-La"
    },
    "displayOrder": {
      "N": "12"
    }
  },
  {
    "itemID": {
      "S": "1e0c3d9a-8b2f-4e65-9f14-7d1b5a6e1e30"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Slips, Trips, & Falls"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-STF"
    },
    "displayOrder": {
      "N": "13"
    }
  },
  {
    "itemID": {
      "S": "e0f7b3c1-2a49-4d85-9b10-5e6c8a7d9048"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Pinch Points"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-PP"
    },
    "displayOrder": {
      "N": "14"
    }
  },
  {
    "itemID": {
      "S": "1a2f9c8e-7b50-4d61-8e43-0c5b7d91a059"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Working with Chemicals"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-WC"
    },
    "displayOrder": {
      "N": "15"
    }
  },
  {
    "itemID": {
      "S": "7e4a5d19-6b32-4f08-9c71-3a2b8f0e106a"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Asbestos or Lead Paint Potential (CAP)"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-ALPP"
    },
    "displayOrder": {
      "N": "16"
    }
  },
  {
    "itemID": {
      "S": "f7b29a3c-1d84-4c56-8a0e-e591d47b2f6b"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Heat Stress Potential"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-HSP"
    },
    "displayOrder": {
      "N": "17"
    }
  },
  {
    "itemID": {
      "S": "b0e71d42-c9f5-4a63-8b1a-37f2d908e67c"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Environmental"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-En"
    },
    "displayOrder": {
      "N": "18"
    }
  },
  {
    "itemID": {
      "S": "d9c7b85a-4e20-4f31-9a0d-6b1e2735f08d"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Natural or Site Hazards"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-NSH"
    },
    "displayOrder": {
      "N": "19"
    }
  },
  {
    "itemID": {
      "S": "2e4b6a9f-0c13-4d58-8a71-fb7d5c1909ee"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Adjacent Work Processes"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-BC"
    },
    "displayOrder": {
      "N": "20"
    }
  },
  {
    "itemID": {
      "S": "58c1b6d7-9a42-4e30-8f05-2a7d91e04b9f"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Barricades/Covers"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-BC"
    },
    "displayOrder": {
      "N": "21"
    }
  },
  {
    "itemID": {
      "S": "a7b2f8d1-0e94-4c63-9a51-3d65c0e9b210"
    },
    "masterID": {
      "S": "0c5a9e1b-2d7f-4c60-8b34-e1f0a9d50c12"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Housekeeping"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": "HCM-HK"
    },
    "displayOrder": {
      "N": "22"
    }
  },
  {
    "itemID": {
      "S": "23d7b8c2-9e0a-4a41-8f53-1e5c0b623335"
    },
    "masterID": {
      "S": "0d4c2b9f-6e7a-4d18-83a5-1e0f9c2b0d13"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Power De-energization Required"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "22a1b9e6-f3d4-4c80-9a52-0e7c5b122234"
    },
    "masterID": {
      "S": "0d4c2b9f-6e7a-4d18-83a5-1e0f9c2b0d13"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Fire Watcher Required"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "21c3e7b0-9d4a-4f16-8a52-f1b2c5e62133"
    },
    "masterID": {
      "S": "0d4c2b9f-6e7a-4d18-83a5-1e0f9c2b0d13"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Insulation Blankets Required"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "20b4f9a7-1d2e-4c50-8a63-5c0e9d8b2032"
    },
    "masterID": {
      "S": "0d4c2b9f-6e7a-4d18-83a5-1e0f9c2b0d13"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Safe Work Zone Marked"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "27d6f8a9-0c1b-4e75-92a3-5b7e3c2d2739"
    },
    "masterID": {
      "S": "0f8e1c5a-9b2d-4e36-84f7-0a6c3d2b0f15"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Signalman Assigned"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": {
      "S": "26e3c0b9-d5f8-4a41-9b76-1a2c7d6e2638"
    },
    "masterID": {
      "S": "0f8e1c5a-9b2d-4e36-84f7-0a6c3d2b0f15"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Area Around Crane Barricaded"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "3"
    }
  },
  {
    "itemID": {
      "S": "25b1d8f4-c3e9-4a06-8f72-0e5c6a7b2537"
    },
    "masterID": {
      "S": "0f8e1c5a-9b2d-4e36-84f7-0a6c3d2b0f15"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Lifting Equip. Inspected"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "5"
    }
  },
  {
    "itemID": {
      "S": "24f0a9b8-5e3d-4c71-91a2-7d6c1b042436"
    },
    "masterID": {
      "S": "0f8e1c5a-9b2d-4e36-84f7-0a6c3d2b0f15"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Worker Protected/Overhead Load "
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "2"
    }
  },
  {
    "itemID": {
      "S": "3b4f20a9-8d7c-4e51-9a16-1c5e7b0f23a1"
    },
    "masterID": {
      "S": "0f8e1c5a-9b2d-4e36-84f7-0a6c3d2b0f15"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Tag Line in Use"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "4"
    }
  },
  {
    "itemID": {
      "S": "28a9e3f2-dc6b-4a01-8f75-1b0c5d742840"
    },
    "masterID": {
      "S": "10a7c2d9-5e8f-4b30-91a6-e2f3d0c71016"
    },
    "isActive": {
      "BOOL": true
    },
    "itemName": {
      "S": "Safe Work Zone Marked"
    },
    "itemAttributes": {
      "S": ""
    },
    "itemType": {
      "S": "List"
    },
    "mastercode": {
      "S": ""
    },
    "displayOrder": {
      "N": "1"
    }
  },
  {
    "itemID": { "S": "30d1b9c6-8e2f-4a74-90c5-f3a7e0b43048" },
    "masterID": { "S": "10a7c2d9-5e8f-4b30-91a6-e2f3d0c71016" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Subsurface survey" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "2f8c1e0b-9d5a-4a37-86f4-c2d3b7e12f47" },
    "masterID": { "S": "10a7c2d9-5e8f-4b30-91a6-e2f3d0c71016" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Received Ground Disturbance Permit" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "2d1f4a9e-c5b3-4e80-8a76-0d7c2b6f2d45" },
    "masterID": { "S": "10a7c2d9-5e8f-4b30-91a6-e2f3d0c71016" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Reviewed As-Built" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "0d4a9f1c-5e78-4b32-9a60-bc71e8d2f3c3" },
    "masterID": { "S": "10a7c2d9-5e8f-4b30-91a6-e2f3d0c71016" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Owner Utilities Marked " },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "32c5b7e9-4d1a-4f80-9a26-f8e0c3b53250" },
    "masterID": { "S": "11b9e8d7-6c0a-4f12-9a53-2d1c7e8f1117" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Proper Sloping/Shoring" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "2e5b9d3a-f4c7-4a10-91e8-6c1f0b2d2e46" },
    "masterID": { "S": "11b9e8d7-6c0a-4f12-9a53-2d1c7e8f1117" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Access/Ingress Provided" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "11b9e8d7-6c0a-4f12-9a53-2d1c7e8f1117" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Inspected Prior to Entering" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "32c5b7e9-4d1a-4f80-9a26-f8e0c3b53255" },
    "masterID": { "S": "11b9e8d7-6c0a-4f12-9a53-2d1c7e8f1117" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Barricades Provided" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "29b8c1f0-4e9d-4a52-91a6-7c5b3e2f2941" },
    "masterID": { "S": "12d6a9f2-8e3c-45b7-9c10-f1b0a4d61218" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Protected from Water" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "2a4e7c5b-d3f9-4a18-8b62-f0c1e9a72a42" },
    "masterID": { "S": "12d6a9f2-8e3c-45b7-9c10-f1b0a4d61218" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Lock Out/Tag Out/Try Out" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "21c3e7b0-9d4a-4f16-8a52-f1b2c5e62133" },
    "masterID": { "S": "12d6a9f2-8e3c-45b7-9c10-f1b0a4d61218" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Reviewed Elect. Safety Procedures" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "e8f92c7a-4b10-4d56-8a31-2b7091d5c444" },
    "masterID": { "S": "12d6a9f2-8e3c-45b7-9c10-f1b0a4d61218" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Confirm Equip. De-Energized" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "21c3e7b0-9d4a-4f16-8a52-f1b2c5e62133" },
    "masterID": { "S": "12d6a9f2-8e3c-45b7-9c10-f1b0a4d61218" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "GCFI in Use" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "2a4e7c5b-d3f9-4a18-8b62-f0c1e9a72a42" },
    "masterID": { "S": "12d6a9f2-8e3c-45b7-9c10-f1b0a4d61218" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Existing Cords Protected" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "2e5b9d3a-f4c7-4a10-91e8-6c1f0b2d2e46" },
    "masterID": { "S": "13e4f9b1-7a2d-4c80-86d5-9a0c8b3f1319" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Hot Work Permit " },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "20b4f9a7-1d2e-4c50-8a63-5c0e9d8b2032" },
    "masterID": { "S": "13e4f9b1-7a2d-4c80-86d5-9a0c8b3f1319" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Fire Watch" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "2f8c1e0b-9d5a-4a37-86f4-c2d3b7e12f47" },
    "masterID": { "S": "13e4f9b1-7a2d-4c80-86d5-9a0c8b3f1319" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Adjacent Area Protected" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "30d1b9c6-8e2f-4a74-90c5-f3a7e0b43048" },
    "masterID": { "S": "13e4f9b1-7a2d-4c80-86d5-9a0c8b3f1319" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Fire Extinguishers" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "f52d10a9-8c74-4e36-9b01-1e7a6c3f9255" },
    "masterID": { "S": "13e4f9b1-7a2d-4c80-86d5-9a0c8b3f1319" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Flammable/Combustible Material Removed" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "2d1f4a9e-c5b3-4e80-8a76-0d7c2b6f2d45" },
    "masterID": { "S": "20b4f9a7-1d2e-4c50-8a63-5c0e9d8b2032" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Sign " },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "2c9d3b8a-7f5e-4a61-90c2-e1b0f6d42c44" },
    "masterID": { "S": "20b4f9a7-1d2e-4c50-8a63-5c0e9d8b2032" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Communication w/ Operator" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "2b6a5d9f-e3c4-4f20-9a81-7b2c1e0d2b43" },
    "masterID": { "S": "20b4f9a7-1d2e-4c50-8a63-5c0e9d8b2032" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Cones" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "2a4e7c5b-d3f9-4a18-8b62-f0c1e9a72a42" },
    "masterID": { "S": "20b4f9a7-1d2e-4c50-8a63-5c0e9d8b2032" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Lane Closure" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "29b8c1f0-4e9d-4a52-91a6-7c5b3e2f2941" },
    "masterID": { "S": "20b4f9a7-1d2e-4c50-8a63-5c0e9d8b2032" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Traffic Barricades" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "d1e7a50b-2c94-4f38-8b06-97c5f3a24e66" },
    "masterID": { "S": "20b4f9a7-1d2e-4c50-8a63-5c0e9d8b2032" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Trained Flagging Personnel or Protected Spotters" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "6" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "3a7c2e91-6f44-4b3a-9d0a-2e1c8f7b1a10" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Hearing Protection Required" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "3a7c2e91-6f44-4b3a-9d0a-2e1c8f7b1a10" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Ear Plugs" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "3a7c2e91-6f44-4b3a-9d0a-2e1c8f7b1a10" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Ear Muffs" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "3a7c2e91-6f44-4b3a-9d0a-2e1c8f7b1a10" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Both Ear Plugs & Ear Muffs" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "0c1e57d6-9a28-4f94-8b03-ae2c4b8d317a" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Inspect General Condition" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "0c1e57d6-9a28-4f94-8b03-ae2c4b8d317a" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "GFCI Used" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "0c1e57d6-9a28-4f94-8b03-ae2c4b8d317a" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Identified PPE" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "0c1e57d6-9a28-4f94-8b03-ae2c4b8d317a" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Reviewed Owner Manual Safety Req." },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "0c1e57d6-9a28-4f94-8b03-ae2c4b8d317a" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Guarding OK" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "d9a6b8e4-1f50-4d63-8a7c-2e5c037b1929" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "PPE – Proper Gloves, etc." },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "6" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "d9a6b8e4-1f50-4d63-8a7c-2e5c037b1929" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Protected Sharp Edges" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "4a71b8f2-d9c3-4e60-9a05-0c6d51e72377" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Hand Protection Required" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "4a71b8f2-d9c3-4e60-9a05-0c6d51e72377" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Back Support Assistance" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "4a71b8f2-d9c3-4e60-9a05-0c6d51e72377" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Reviewed Proper Lifting Technique" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "4a71b8f2-d9c3-4e60-9a05-0c6d51e72377" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Reviewed Equip. for Proper Lifting" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "5d1c8e92-3a74-4f60-9b12-7e0a6c4f1281" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Inspect General Condition Prior" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "5d1c8e92-3a74-4f60-9b12-7e0a6c4f1281" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Ladder Tied Off or Held" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "5d1c8e92-3a74-4f60-9b12-7e0a6c4f1281" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Proper Angle and Placement" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "5d1c8e92-3a74-4f60-9b12-7e0a6c4f1281" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Ladder Inspected within Last Quarter" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "5d1c8e92-3a74-4f60-9b12-7e0a6c4f1281" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Reviewed Ladder Safety" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "a9c3f5e1-6d42-4b80-8a71-2e7f019c3d52" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Inspect for Trip Hazards" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "a9c3f5e1-6d42-4b80-8a71-2e7f019c3d52" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Work Zone Debris Free" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "a9c3f5e1-6d42-4b80-8a71-2e7f019c3d52" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Tools & Material Properly Stored" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "a9c3f5e1-6d42-4b80-8a71-2e7f019c3d52" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Hazards Marked" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "a9c3f5e1-6d42-4b80-8a71-2e7f019c3d52" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Hazards Marked" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "a9c3f5e1-6d42-4b80-8a71-2e7f019c3d52" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Extension Cords Properly Stored" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "6" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "a9c3f5e1-6d42-4b80-8a71-2e7f019c3d52" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Clear Paths of Egress" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "7" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "0e4a9b71-2f83-4d65-9c10-b7a5e6d12893" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Working Near Operating Equip." },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "0e4a9b71-2f83-4d65-9c10-b7a5e6d12893" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Hand/Body Positioning – Manual Material Handling" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "c2b7d91e-8f30-4a54-9b06-5e1c7a0d6424" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Reviewed & Made SDS’ Readily Available" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "c2b7d91e-8f30-4a54-9b06-5e1c7a0d6424" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Have Proper Containers w/ Labels" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "c2b7d91e-8f30-4a54-9b06-5e1c7a0d6424" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Exposure Monitoring Req." },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "c2b7d91e-8f30-4a54-9b06-5e1c7a0d6424" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Identified Proper PPE" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "f8a31b09-5d72-4e64-8c90-2b7d16a4e135" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Area Contains Asbestos or Lead" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "f8a31b09-5d72-4e64-8c90-2b7d16a4e135" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Asbestos Controls in Place" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "f8a31b09-5d72-4e64-8c90-2b7d16a4e135" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Lead Paint Controls in Place" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "f8a31b09-5d72-4e64-8c90-2b7d16a4e135" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Exposure Monitoring Req." },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "7d9e4c2a-1b65-4f08-9a73-6e5b0c812f46" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Head Stress Monitoring > 85" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "7d9e4c2a-1b65-4f08-9a73-6e5b0c812f46" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Liquids Available" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "7d9e4c2a-1b65-4f08-9a73-6e5b0c812f46" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Cool Down Periods" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "7d9e4c2a-1b65-4f08-9a73-6e5b0c812f46" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Sunscreen" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "7d9e4c2a-1b65-4f08-9a73-6e5b0c812f46" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Reviewed Heat Symptoms" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "b4e17d5a-8c39-4a21-9f60-03c2a96b7e57" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Air Emissions" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "b4e17d5a-8c39-4a21-9f60-03c2a96b7e57" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Water Discharge" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "b4e17d5a-8c39-4a21-9f60-03c2a96b7e57" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Pollution Prevention" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "b4e17d5a-8c39-4a21-9f60-03c2a96b7e57" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Hazardous Waste" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "b4e17d5a-8c39-4a21-9f60-03c2a96b7e57" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Waste Minimization" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "b4e17d5a-8c39-4a21-9f60-03c2a96b7e57" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Other:" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "6" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "31c9e0b6-7d2f-4e54-8a19-f5a4b2d68708" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Notified Them of our Presence" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "31c9e0b6-7d2f-4e54-8a19-f5a4b2d68708" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Others above/below " },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "31c9e0b6-7d2f-4e54-8a19-f5a4b2d68708" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Coordinated with Adjacent Employers" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "31c9e0b6-7d2f-4e54-8a19-f5a4b2d68708" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Need Barriers Between" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "d5b4c9a2-0f87-4b63-9e15-1a7c8e326b79" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Danger Barricade Tape Req. with Signage " },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "d5b4c9a2-0f87-4b63-9e15-1a7c8e326b79" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Secured Covers over Opening" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "d5b4c9a2-0f87-4b63-9e15-1a7c8e326b79" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Caution Barricade Tape Req." },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "d5b4c9a2-0f87-4b63-9e15-1a7c8e326b79" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Rigid Railing Req." },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "d5b4c9a2-0f87-4b63-9e15-1a7c8e326b79" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Warning Signs Req." },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "5" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "8a9f20e1-4d6c-4f75-8b03-7e1c53a96d10" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Weather" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "8a9f20e1-4d6c-4f75-8b03-7e1c53a96d10" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Terrain" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "8a9f20e1-4d6c-4f75-8b03-7e1c53a96d10" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Biological Hazard" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "3" }
  },
  {
    "itemID": { "S": "a9c3f5e1-6d42-4b80-8a71-2e7f019c3d52" },
    "masterID": { "S": "8a9f20e1-4d6c-4f75-8b03-7e1c53a96d10" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Animals/Reptiles/Insects" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "4" }
  },
  {
    "itemID": { "S": "5d1c8e92-3a74-4f60-9b12-7e0a6c4f1281" },
    "masterID": { "S": "9b0e4f8a-1d52-4c69-8a73-26e7d5c93121" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Trash Properly Disposed of at Regular Intervals " },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "1" }
  },
  {
    "itemID": { "S": "31a7f8d3-c9e4-4a51-8b62-0e5d1c2b3149" },
    "masterID": { "S": "9b0e4f8a-1d52-4c69-8a73-26e7d5c93121" },
    "isActive": { "BOOL": true },
    "itemName": { "S": "Work Area Swept with Sweeping Compound" },
    "itemAttributes": { "S": "" },
    "itemType": { "S": "List" },
    "mastercode": { "S": "" },
    "displayOrder": { "N": "2" }
  }
  ]






  async function fetchMaster() {
    try {
      const allUsers = await DataStore.query(Master);

      console.log(allUsers);

      // const usersWithAddresses = await Promise.all(
      //   allUsers.map(async (u) => {
      //     const addresses = await u.addresses.toArray(); // ✅ FIX
      //     return { ...u, addresses };
      //   })
      // );
      // console.log(usersWithAddresses);
      // setUsers(usersWithAddresses as any);
    } catch (err) {
      console.log("error fetching users:", err);
    }
  }


  function attrToPlain(v: any): any {
    if (v == null) return undefined;
    if (typeof v !== "object") return v;
    if ("S" in v) return v.S;
    if ("N" in v) {
      const n = v.N;
      const num = Number(n);
      return Number.isFinite(num) ? num : n;
    }
    if ("BOOL" in v) return v.BOOL;
    if ("L" in v) return v.L.map(attrToPlain);
    if ("M" in v) {
      const out: Record<string, any> = {};
      for (const k of Object.keys(v.M)) out[k] = attrToPlain(v.M[k]);
      return out;
    }
    return v;
  }

  function toPlainObject(attrMap: Record<string, any>): Record<string, any> {
    const out: Record<string, any> = {};
    for (const key of Object.keys(attrMap)) {
      out[key] = attrToPlain(attrMap[key]);
    }
    return out;
  }

  function toModelMaster(plain: Record<string, any>) {
    return {
      id: plain.masterID ?? plain.masterId ?? plain.id,
      categoryName: plain.categoryName ?? "",
      displayOrder:
        typeof plain.displayOrder === "number"
          ? plain.displayOrder
          : Number(plain.displayOrder) || 0,
      isActive: typeof plain.isActive === "boolean" ? plain.isActive : !!plain.isActive,
      MasterDescription: plain.MasterDescription ?? plain.masterDescription ?? "",
      masterName: plain.masterName ?? "",
      masterTitle: plain.masterTitle ?? "",
    };
  }

  function toModelMasterItem(plain: Record<string, any>) {
    return {
      //  plain.itemID ?? plain.itemId ?? plain.id,
      id: crypto.randomUUID(),
      masterID: plain.masterID ?? plain.masterId ?? "",
      mastercode: plain.mastercode,
      isActive: typeof plain.isActive === "boolean" ? plain.isActive : !!plain.isActive,
      itemName: plain.itemName.trim() ?? "",
      itemAttributes: [""],
      itemType: plain.itemType ?? "",
      displayOrder:
        typeof plain.displayOrder === "number"
          ? plain.displayOrder
          : Number(plain.displayOrder) || 0,
    };
  }


  // Filter helper using toPlainObject to avoid type errors
  function filterItemsForMasterID(masterIDValue: string) {
    const target = (masterIDValue || "").toString().trim();
    return masterItem.filter((it) => {
      const plain = toPlainObject(it as Record<string, any>);
      const itMasterVal = (plain.masterID ?? plain.masterId ?? "").toString().trim();
      return itMasterVal === target;
    });
  }

  // Save all masters sequentially; for each master save its matched items sequentially.
  async function addItem() {
    setError(null);
    setProgressMessage(null);

    if (!Array.isArray(master) || master.length === 0) {
      setError("No master records available.");
      return;
    }

    setIsWorking(true);
    setSavedMasters([]);
    setSavedItems([]);
    setFailedSaves([]);

    try {
      for (let mi = 0; mi < master.length; mi++) {
        const masterRaw = master[mi];
        const masterPlain = toPlainObject(masterRaw);
        const masterIDValue = (masterPlain.masterID ?? masterPlain.masterId ?? "").toString().trim();

        if (!masterIDValue) {
          console.warn(`Skipping master at index ${mi}: missing masterID`);
          continue;
        }

        // find matched items
        const matchedRaw = filterItemsForMasterID(masterIDValue);
        const matchedPlain = matchedRaw.map(toPlainObject);

        setProgressMessage(`(${mi + 1}/${master.length}) Saving master ${masterIDValue} with ${matchedPlain.length} items...`);
        console.log(`Processing master ${mi + 1}/${master.length}`, masterPlain);

        // prepare master model input and map id if needed
        const masterInput = toModelMaster(masterPlain);
        if (masterInput.id) {
          (masterInput as any).id = masterInput.id;
        }

        try {
          const savedM = await DataStore.save(new Master(masterInput));
          setSavedMasters((prev) => [...prev, savedM]);
          console.log("Saved master:", savedM);
        } catch (mErr: any) {
          const msg = `Failed saving master ${masterIDValue}: ${mErr?.message ?? mErr}`;
          console.error(msg, mErr);
          setFailedSaves((prev) => [...prev, msg]);
          // continue to items? You may choose to skip items if master save failed.
          // Here we'll continue and still attempt to save items.
        }

        // save matched items one-by-one
        for (let ii = 0; ii < matchedPlain.length; ii++) {
          const plainItem = matchedPlain[ii];
          const itemInput = toModelMasterItem(plainItem);
          if (itemInput.id) {
            (itemInput as any).id = itemInput.id;
          }
          const displayId = itemInput.id ?? (itemInput as any).id ?? `#${ii + 1}`;

          setProgressMessage(`Saving item ${displayId} (${ii + 1}/${matchedPlain.length}) for master ${masterIDValue}...`);
          try {
            debugger
            const saved = await DataStore.save(new MasterItem(itemInput));
            setSavedItems((prev) => [...prev, saved]);
            console.log(`Saved item ${displayId}`, saved);
          } catch (itErr: any) {
            const msg = `Failed saving item ${displayId} for master ${masterIDValue}: ${itErr?.message ?? itErr}`;
            console.error(msg, itErr);
            setFailedSaves((prev) => [...prev, msg]);
            // continue with next item
          }
        }
      }

      setProgressMessage("Processing completed for all masters.");
    } catch (err: any) {
      const msg = `Unexpected error: ${err?.message ?? err}`;
      console.error(msg, err);
      setError(msg);
    } finally {
      setIsWorking(false);
    }
  }

   const strHardMeasure = "Wear harness,Use guardrails";
   const strRequiredPermits = "Work at Height Permit";
   const strRequiredChecklist = "Pre-work Check";
   const strRequiredPPE = "Helmet,Gloves";

   const strUpdatedRequiredPPE = "HandGloves,Glasses,Helmet";


  const hazard1 = new HazardandMeasuresControlDef({
    hazard: "Working at height",
    hazardMeasures: strHardMeasure.split(",")
  });

  const optionInfo1 = new PtpOptionsInfo({
    requiredPermits: strRequiredPermits.split(","),
    requiredChecklist: strRequiredChecklist.split(","),
    requiredPPE: strRequiredPPE.split(","),
    hazardandMeasures: [hazard1]
  });


  async function addPTPTemplateDefinition() {
    const newTemplate = await DataStore.save(
      new PtpTemplateDef({
        id: crypto.randomUUID(), // If not auto-generated, else omit
        templateName: "Standard Construction PTP",
        ptpoptions: optionInfo1,
        isTemplateUsed: "Draft",
        isActive: true
      })
    );

    console.log(newTemplate);
  }

  async function fetchPtpTemplateDef() {
    try {
      const allPTPTemplates = await DataStore.query(PtpTemplateDef);

      console.log("allPTPTemplates");
      console.log(allPTPTemplates);


    // const ptpTemplate = allPTPTemplates[0];
    // if (!ptpTemplate || !ptpTemplate.ptpoptions) {
    //   throw new Error("No template or options found");
    // }

    // // Make a new ptpoptions object with updated requiredPPE
    // const updatedPtpOptions = {
    //   ...ptpTemplate.ptpoptions,
    //   requiredPPE: strUpdatedRequiredPPE.split(","),
    // };

    // // Save an updated PtpTemplateDef with the modified ptpoptions
    // await DataStore.save(
    //   PtpTemplateDef.copyOf(ptpTemplate, updated => {
    //     updated.ptpoptions = updatedPtpOptions;
    //   })
    // );
      // ptpTemplateOptions[0].options?.requiredPPE = strUpdatedRequiredPPE.split(",");

      // setUsers(usersWithAddresses as any);
    } catch (err) {
      console.log("error fetching users:", err);
    }
  }


  function clear() {
    DataStore.clear()
  }
  return (
    <div>
      <button onClick={fetchMaster}>fetchMasterDetails</button>
      <br />
      <button onClick={clear}>clear</button>
      <br />
      <button onClick={addItem} disabled={isWorking}>
        {isWorking ? "Working..." : "Add All Masters + Items"}
      </button>

      <br />
      <button onClick={addPTPTemplateDefinition}>addPTPTemplateDefinition</button>
      <br />
      <button onClick={fetchPtpTemplateDef}>fetchPtpTemplateDef</button>

      {progressMessage && <div style={{ marginTop: 8 }}>{progressMessage}</div>}
      {error && <div style={{ marginTop: 8, color: "red" }}>Error: {error}</div>}

      {savedMasters.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <h4>Saved Masters ({savedMasters.length})</h4>
          <pre>{JSON.stringify(savedMasters, null, 2)}</pre>
        </div>
      )}

      {savedItems.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <h4>Saved Items ({savedItems.length})</h4>
          <pre>{JSON.stringify(savedItems, null, 2)}</pre>
        </div>
      )}

      {failedSaves.length > 0 && (
        <div style={{ marginTop: 12, color: "orange" }}>
          <h4>Failed Saves ({failedSaves.length})</h4>
          <pre>{JSON.stringify(failedSaves, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}