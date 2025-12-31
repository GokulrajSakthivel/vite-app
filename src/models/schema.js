export const schema = {
    "models": {
        "Users": {
            "name": "Users",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addresses": {
                    "name": "addresses",
                    "isArray": true,
                    "type": {
                        "model": "Address"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "userID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "userPools",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Address": {
            "name": "Address",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Addresses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUser",
                        "fields": [
                            "userID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "userPools",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Master": {
            "name": "Master",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "masterTitle": {
                    "name": "masterTitle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "categoryName": {
                    "name": "categoryName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "masterName": {
                    "name": "masterName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "masterDescription": {
                    "name": "masterDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "displayOrder": {
                    "name": "displayOrder",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "isActive": {
                    "name": "isActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdBy": {
                    "name": "createdBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "modifiedBy": {
                    "name": "modifiedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "model": "MasterItem"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "masterID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Masters",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCategoryName",
                        "queryField": "mastersByCategoryName",
                        "fields": [
                            "categoryName"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byMasterName",
                        "queryField": "mastersByMasterName",
                        "fields": [
                            "masterName"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "userPools",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MasterItem": {
            "name": "MasterItem",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "masterID": {
                    "name": "masterID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "itemName": {
                    "name": "itemName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemType": {
                    "name": "itemType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemAttributes": {
                    "name": "itemAttributes",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "mastercode": {
                    "name": "mastercode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "displayOrder": {
                    "name": "displayOrder",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "isActive": {
                    "name": "isActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdBy": {
                    "name": "createdBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "modifiedBy": {
                    "name": "modifiedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MasterItems",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "masterID",
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Master.items",
                        "fields": [
                            "masterID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "userPools",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PtpTemplateDef": {
            "name": "PtpTemplateDef",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "templateName": {
                    "name": "templateName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ptpOptions": {
                    "name": "ptpOptions",
                    "isArray": false,
                    "type": {
                        "nonModel": "PtpOptionsInfo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "isTemplateUsed": {
                    "name": "isTemplateUsed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isActive": {
                    "name": "isActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdBy": {
                    "name": "createdBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "modifiedBy": {
                    "name": "modifiedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PtpTemplateDefs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id",
                            "templateName"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "userPools",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PTPTemplate": {
            "name": "PTPTemplate",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "templateDefId": {
                    "name": "templateDefId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ptpOptonsSelection": {
                    "name": "ptpOptonsSelection",
                    "isArray": true,
                    "type": {
                        "nonModel": "PTPSelections"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "foremanSignInandOut": {
                    "name": "foremanSignInandOut",
                    "isArray": true,
                    "type": {
                        "nonModel": "ForemanSignInfo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "emergencyContacts": {
                    "name": "emergencyContacts",
                    "isArray": true,
                    "type": {
                        "nonModel": "EmergencyContactInfo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "shiftReviewes": {
                    "name": "shiftReviewes",
                    "isArray": true,
                    "type": {
                        "nonModel": "ShiftReviewInfo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdBy": {
                    "name": "createdBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "modifiedBy": {
                    "name": "modifiedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tasks": {
                    "name": "tasks",
                    "isArray": true,
                    "type": {
                        "model": "PTPTasksValue"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "templateId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PTPTemplates",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "templateDefId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "userPools",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PTPTasksValue": {
            "name": "PTPTasksValue",
            "fields": {
                "templateId": {
                    "name": "templateId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "entityType": {
                    "name": "entityType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ptpTasks": {
                    "name": "ptpTasks",
                    "isArray": true,
                    "type": {
                        "nonModel": "TaskDef"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "crewMemberLogin": {
                    "name": "crewMemberLogin",
                    "isArray": true,
                    "type": {
                        "nonModel": "CrewLoginInfo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdBy": {
                    "name": "createdBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "modifiedBy": {
                    "name": "modifiedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PTPTasksValues",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "templateId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-PTPTemplate.tasks",
                        "fields": [
                            "templateId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "userPools",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ProjectSiteHierarchy": {
            "name": "ProjectSiteHierarchy",
            "fields": {
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "projectSortKey": {
                    "name": "projectSortKey",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "entityType": {
                    "name": "entityType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "region": {
                    "name": "region",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "businessUnit": {
                    "name": "businessUnit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "projectSite": {
                    "name": "projectSite",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ProjectSiteHierarchies",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "userId",
                            "projectSortKey"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "userPools",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "HazardandMeasuresControlDef": {
            "name": "HazardandMeasuresControlDef",
            "fields": {
                "hazard": {
                    "name": "hazard",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hazardMeasures": {
                    "name": "hazardMeasures",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "PtpOptionsInfo": {
            "name": "PtpOptionsInfo",
            "fields": {
                "requiredPermits": {
                    "name": "requiredPermits",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "requiredChecklist": {
                    "name": "requiredChecklist",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "requiredPPE": {
                    "name": "requiredPPE",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "hazardandMeasures": {
                    "name": "hazardandMeasures",
                    "isArray": true,
                    "type": {
                        "nonModel": "HazardandMeasuresControlDef"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "HazardSelections": {
            "name": "HazardSelections",
            "fields": {
                "hazard": {
                    "name": "hazard",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hazardMeasure": {
                    "name": "hazardMeasure",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "rcd": {
                    "name": "rcd",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PTPSelections": {
            "name": "PTPSelections",
            "fields": {
                "requiredPermits": {
                    "name": "requiredPermits",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "rquiredChecklist": {
                    "name": "rquiredChecklist",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "requiredPPE": {
                    "name": "requiredPPE",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "hazardAndHazardMeasure": {
                    "name": "hazardAndHazardMeasure",
                    "isArray": true,
                    "type": {
                        "nonModel": "HazardSelections"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ForemanSignInfo": {
            "name": "ForemanSignInfo",
            "fields": {
                "foremanName": {
                    "name": "foremanName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "signIn": {
                    "name": "signIn",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "signInDateTime": {
                    "name": "signInDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "signOut": {
                    "name": "signOut",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "signOutDateTime": {
                    "name": "signOutDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "companyName": {
                    "name": "companyName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "EmergencyContactInfo": {
            "name": "EmergencyContactInfo",
            "fields": {
                "isEmergencyActionPlanDiscussed": {
                    "name": "isEmergencyActionPlanDiscussed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "safety": {
                    "name": "safety",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "superintendent": {
                    "name": "superintendent",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyMusterArea": {
                    "name": "emergencyMusterArea",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "other": {
                    "name": "other",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ShiftReviewInfo": {
            "name": "ShiftReviewInfo",
            "fields": {
                "isAllToolsusedAndStroedProperly": {
                    "name": "isAllToolsusedAndStroedProperly",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "haveAllPermitsClosed": {
                    "name": "haveAllPermitsClosed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "didAnyIncidentesorInjuries": {
                    "name": "didAnyIncidentesorInjuries",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "wasTheIncidentReported": {
                    "name": "wasTheIncidentReported",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "descriptionOfIncident": {
                    "name": "descriptionOfIncident",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TaskDef": {
            "name": "TaskDef",
            "fields": {
                "task": {
                    "name": "task",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "toolsAndEquipment": {
                    "name": "toolsAndEquipment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "taskHazarad": {
                    "name": "taskHazarad",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hazardControl": {
                    "name": "hazardControl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "competentPerson": {
                    "name": "competentPerson",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CrewLoginInfo": {
            "name": "CrewLoginInfo",
            "fields": {
                "crewName": {
                    "name": "crewName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "signIn": {
                    "name": "signIn",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "signInDateTime": {
                    "name": "signInDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "signInComments": {
                    "name": "signInComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "signOut": {
                    "name": "signOut",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "signOutDateTime": {
                    "name": "signOutDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "signOutComments": {
                    "name": "signOutComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "4303ac9869ef8e09e8da32b11bf4a5fd"
};