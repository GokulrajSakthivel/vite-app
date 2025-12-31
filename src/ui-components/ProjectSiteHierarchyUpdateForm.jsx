/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { ProjectSiteHierarchy } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProjectSiteHierarchyUpdateForm(props) {
  const {
    id: idProp,
    projectSiteHierarchy: projectSiteHierarchyModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userId: "",
    projectSortKey: "",
    entityType: "",
    region: "",
    businessUnit: "",
    projectSite: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [projectSortKey, setProjectSortKey] = React.useState(
    initialValues.projectSortKey
  );
  const [entityType, setEntityType] = React.useState(initialValues.entityType);
  const [region, setRegion] = React.useState(initialValues.region);
  const [businessUnit, setBusinessUnit] = React.useState(
    initialValues.businessUnit
  );
  const [projectSite, setProjectSite] = React.useState(
    initialValues.projectSite
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projectSiteHierarchyRecord
      ? { ...initialValues, ...projectSiteHierarchyRecord }
      : initialValues;
    setUserId(cleanValues.userId);
    setProjectSortKey(cleanValues.projectSortKey);
    setEntityType(cleanValues.entityType);
    setRegion(cleanValues.region);
    setBusinessUnit(cleanValues.businessUnit);
    setProjectSite(cleanValues.projectSite);
    setErrors({});
  };
  const [projectSiteHierarchyRecord, setProjectSiteHierarchyRecord] =
    React.useState(projectSiteHierarchyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ProjectSiteHierarchy, idProp)
        : projectSiteHierarchyModelProp;
      setProjectSiteHierarchyRecord(record);
    };
    queryData();
  }, [idProp, projectSiteHierarchyModelProp]);
  React.useEffect(resetStateValues, [projectSiteHierarchyRecord]);
  const validations = {
    userId: [{ type: "Required" }],
    projectSortKey: [{ type: "Required" }],
    entityType: [],
    region: [],
    businessUnit: [],
    projectSite: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userId,
          projectSortKey,
          entityType,
          region,
          businessUnit,
          projectSite,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            ProjectSiteHierarchy.copyOf(
              projectSiteHierarchyRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectSiteHierarchyUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={true}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              projectSortKey,
              entityType,
              region,
              businessUnit,
              projectSite,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="Project sort key"
        isRequired={true}
        isReadOnly={true}
        value={projectSortKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              projectSortKey: value,
              entityType,
              region,
              businessUnit,
              projectSite,
            };
            const result = onChange(modelFields);
            value = result?.projectSortKey ?? value;
          }
          if (errors.projectSortKey?.hasError) {
            runValidationTasks("projectSortKey", value);
          }
          setProjectSortKey(value);
        }}
        onBlur={() => runValidationTasks("projectSortKey", projectSortKey)}
        errorMessage={errors.projectSortKey?.errorMessage}
        hasError={errors.projectSortKey?.hasError}
        {...getOverrideProps(overrides, "projectSortKey")}
      ></TextField>
      <TextField
        label="Entity type"
        isRequired={false}
        isReadOnly={false}
        value={entityType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              projectSortKey,
              entityType: value,
              region,
              businessUnit,
              projectSite,
            };
            const result = onChange(modelFields);
            value = result?.entityType ?? value;
          }
          if (errors.entityType?.hasError) {
            runValidationTasks("entityType", value);
          }
          setEntityType(value);
        }}
        onBlur={() => runValidationTasks("entityType", entityType)}
        errorMessage={errors.entityType?.errorMessage}
        hasError={errors.entityType?.hasError}
        {...getOverrideProps(overrides, "entityType")}
      ></TextField>
      <TextField
        label="Region"
        isRequired={false}
        isReadOnly={false}
        value={region}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              projectSortKey,
              entityType,
              region: value,
              businessUnit,
              projectSite,
            };
            const result = onChange(modelFields);
            value = result?.region ?? value;
          }
          if (errors.region?.hasError) {
            runValidationTasks("region", value);
          }
          setRegion(value);
        }}
        onBlur={() => runValidationTasks("region", region)}
        errorMessage={errors.region?.errorMessage}
        hasError={errors.region?.hasError}
        {...getOverrideProps(overrides, "region")}
      ></TextField>
      <TextField
        label="Business unit"
        isRequired={false}
        isReadOnly={false}
        value={businessUnit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              projectSortKey,
              entityType,
              region,
              businessUnit: value,
              projectSite,
            };
            const result = onChange(modelFields);
            value = result?.businessUnit ?? value;
          }
          if (errors.businessUnit?.hasError) {
            runValidationTasks("businessUnit", value);
          }
          setBusinessUnit(value);
        }}
        onBlur={() => runValidationTasks("businessUnit", businessUnit)}
        errorMessage={errors.businessUnit?.errorMessage}
        hasError={errors.businessUnit?.hasError}
        {...getOverrideProps(overrides, "businessUnit")}
      ></TextField>
      <TextField
        label="Project site"
        isRequired={false}
        isReadOnly={false}
        value={projectSite}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              projectSortKey,
              entityType,
              region,
              businessUnit,
              projectSite: value,
            };
            const result = onChange(modelFields);
            value = result?.projectSite ?? value;
          }
          if (errors.projectSite?.hasError) {
            runValidationTasks("projectSite", value);
          }
          setProjectSite(value);
        }}
        onBlur={() => runValidationTasks("projectSite", projectSite)}
        errorMessage={errors.projectSite?.errorMessage}
        hasError={errors.projectSite?.hasError}
        {...getOverrideProps(overrides, "projectSite")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || projectSiteHierarchyModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || projectSiteHierarchyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
