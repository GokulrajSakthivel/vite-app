/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { PtpTemplateDef } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PtpTemplateDefUpdateForm(props) {
  const {
    id: idProp,
    ptpTemplateDef: ptpTemplateDefModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    templateName: "",
    isTemplateUsed: "",
    isActive: false,
    createdBy: "",
    modifiedBy: "",
  };
  const [templateName, setTemplateName] = React.useState(
    initialValues.templateName
  );
  const [isTemplateUsed, setIsTemplateUsed] = React.useState(
    initialValues.isTemplateUsed
  );
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [createdBy, setCreatedBy] = React.useState(initialValues.createdBy);
  const [modifiedBy, setModifiedBy] = React.useState(initialValues.modifiedBy);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ptpTemplateDefRecord
      ? { ...initialValues, ...ptpTemplateDefRecord }
      : initialValues;
    setTemplateName(cleanValues.templateName);
    setIsTemplateUsed(cleanValues.isTemplateUsed);
    setIsActive(cleanValues.isActive);
    setCreatedBy(cleanValues.createdBy);
    setModifiedBy(cleanValues.modifiedBy);
    setErrors({});
  };
  const [ptpTemplateDefRecord, setPtpTemplateDefRecord] = React.useState(
    ptpTemplateDefModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PtpTemplateDef, idProp)
        : ptpTemplateDefModelProp;
      setPtpTemplateDefRecord(record);
    };
    queryData();
  }, [idProp, ptpTemplateDefModelProp]);
  React.useEffect(resetStateValues, [ptpTemplateDefRecord]);
  const validations = {
    templateName: [{ type: "Required" }],
    isTemplateUsed: [],
    isActive: [],
    createdBy: [],
    modifiedBy: [],
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
          templateName,
          isTemplateUsed,
          isActive,
          createdBy,
          modifiedBy,
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
            PtpTemplateDef.copyOf(ptpTemplateDefRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
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
      {...getOverrideProps(overrides, "PtpTemplateDefUpdateForm")}
      {...rest}
    >
      <TextField
        label="Template name"
        isRequired={true}
        isReadOnly={true}
        value={templateName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              templateName: value,
              isTemplateUsed,
              isActive,
              createdBy,
              modifiedBy,
            };
            const result = onChange(modelFields);
            value = result?.templateName ?? value;
          }
          if (errors.templateName?.hasError) {
            runValidationTasks("templateName", value);
          }
          setTemplateName(value);
        }}
        onBlur={() => runValidationTasks("templateName", templateName)}
        errorMessage={errors.templateName?.errorMessage}
        hasError={errors.templateName?.hasError}
        {...getOverrideProps(overrides, "templateName")}
      ></TextField>
      <TextField
        label="Is template used"
        isRequired={false}
        isReadOnly={false}
        value={isTemplateUsed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              templateName,
              isTemplateUsed: value,
              isActive,
              createdBy,
              modifiedBy,
            };
            const result = onChange(modelFields);
            value = result?.isTemplateUsed ?? value;
          }
          if (errors.isTemplateUsed?.hasError) {
            runValidationTasks("isTemplateUsed", value);
          }
          setIsTemplateUsed(value);
        }}
        onBlur={() => runValidationTasks("isTemplateUsed", isTemplateUsed)}
        errorMessage={errors.isTemplateUsed?.errorMessage}
        hasError={errors.isTemplateUsed?.hasError}
        {...getOverrideProps(overrides, "isTemplateUsed")}
      ></TextField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              templateName,
              isTemplateUsed,
              isActive: value,
              createdBy,
              modifiedBy,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></SwitchField>
      <TextField
        label="Created by"
        isRequired={false}
        isReadOnly={false}
        value={createdBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              templateName,
              isTemplateUsed,
              isActive,
              createdBy: value,
              modifiedBy,
            };
            const result = onChange(modelFields);
            value = result?.createdBy ?? value;
          }
          if (errors.createdBy?.hasError) {
            runValidationTasks("createdBy", value);
          }
          setCreatedBy(value);
        }}
        onBlur={() => runValidationTasks("createdBy", createdBy)}
        errorMessage={errors.createdBy?.errorMessage}
        hasError={errors.createdBy?.hasError}
        {...getOverrideProps(overrides, "createdBy")}
      ></TextField>
      <TextField
        label="Modified by"
        isRequired={false}
        isReadOnly={false}
        value={modifiedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              templateName,
              isTemplateUsed,
              isActive,
              createdBy,
              modifiedBy: value,
            };
            const result = onChange(modelFields);
            value = result?.modifiedBy ?? value;
          }
          if (errors.modifiedBy?.hasError) {
            runValidationTasks("modifiedBy", value);
          }
          setModifiedBy(value);
        }}
        onBlur={() => runValidationTasks("modifiedBy", modifiedBy)}
        errorMessage={errors.modifiedBy?.errorMessage}
        hasError={errors.modifiedBy?.hasError}
        {...getOverrideProps(overrides, "modifiedBy")}
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
          isDisabled={!(idProp || ptpTemplateDefModelProp)}
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
              !(idProp || ptpTemplateDefModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
