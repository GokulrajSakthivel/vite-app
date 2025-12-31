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
import { Master } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MasterCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    masterTitle: "",
    categoryName: "",
    masterName: "",
    masterDescription: "",
    displayOrder: "",
    isActive: false,
    createdBy: "",
    modifiedBy: "",
  };
  const [masterTitle, setMasterTitle] = React.useState(
    initialValues.masterTitle
  );
  const [categoryName, setCategoryName] = React.useState(
    initialValues.categoryName
  );
  const [masterName, setMasterName] = React.useState(initialValues.masterName);
  const [masterDescription, setMasterDescription] = React.useState(
    initialValues.masterDescription
  );
  const [displayOrder, setDisplayOrder] = React.useState(
    initialValues.displayOrder
  );
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [createdBy, setCreatedBy] = React.useState(initialValues.createdBy);
  const [modifiedBy, setModifiedBy] = React.useState(initialValues.modifiedBy);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMasterTitle(initialValues.masterTitle);
    setCategoryName(initialValues.categoryName);
    setMasterName(initialValues.masterName);
    setMasterDescription(initialValues.masterDescription);
    setDisplayOrder(initialValues.displayOrder);
    setIsActive(initialValues.isActive);
    setCreatedBy(initialValues.createdBy);
    setModifiedBy(initialValues.modifiedBy);
    setErrors({});
  };
  const validations = {
    masterTitle: [],
    categoryName: [],
    masterName: [],
    masterDescription: [],
    displayOrder: [],
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
          masterTitle,
          categoryName,
          masterName,
          masterDescription,
          displayOrder,
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
          await DataStore.save(new Master(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MasterCreateForm")}
      {...rest}
    >
      <TextField
        label="Master title"
        isRequired={false}
        isReadOnly={false}
        value={masterTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              masterTitle: value,
              categoryName,
              masterName,
              masterDescription,
              displayOrder,
              isActive,
              createdBy,
              modifiedBy,
            };
            const result = onChange(modelFields);
            value = result?.masterTitle ?? value;
          }
          if (errors.masterTitle?.hasError) {
            runValidationTasks("masterTitle", value);
          }
          setMasterTitle(value);
        }}
        onBlur={() => runValidationTasks("masterTitle", masterTitle)}
        errorMessage={errors.masterTitle?.errorMessage}
        hasError={errors.masterTitle?.hasError}
        {...getOverrideProps(overrides, "masterTitle")}
      ></TextField>
      <TextField
        label="Category name"
        isRequired={false}
        isReadOnly={false}
        value={categoryName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              masterTitle,
              categoryName: value,
              masterName,
              masterDescription,
              displayOrder,
              isActive,
              createdBy,
              modifiedBy,
            };
            const result = onChange(modelFields);
            value = result?.categoryName ?? value;
          }
          if (errors.categoryName?.hasError) {
            runValidationTasks("categoryName", value);
          }
          setCategoryName(value);
        }}
        onBlur={() => runValidationTasks("categoryName", categoryName)}
        errorMessage={errors.categoryName?.errorMessage}
        hasError={errors.categoryName?.hasError}
        {...getOverrideProps(overrides, "categoryName")}
      ></TextField>
      <TextField
        label="Master name"
        isRequired={false}
        isReadOnly={false}
        value={masterName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              masterTitle,
              categoryName,
              masterName: value,
              masterDescription,
              displayOrder,
              isActive,
              createdBy,
              modifiedBy,
            };
            const result = onChange(modelFields);
            value = result?.masterName ?? value;
          }
          if (errors.masterName?.hasError) {
            runValidationTasks("masterName", value);
          }
          setMasterName(value);
        }}
        onBlur={() => runValidationTasks("masterName", masterName)}
        errorMessage={errors.masterName?.errorMessage}
        hasError={errors.masterName?.hasError}
        {...getOverrideProps(overrides, "masterName")}
      ></TextField>
      <TextField
        label="Master description"
        isRequired={false}
        isReadOnly={false}
        value={masterDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              masterTitle,
              categoryName,
              masterName,
              masterDescription: value,
              displayOrder,
              isActive,
              createdBy,
              modifiedBy,
            };
            const result = onChange(modelFields);
            value = result?.masterDescription ?? value;
          }
          if (errors.masterDescription?.hasError) {
            runValidationTasks("masterDescription", value);
          }
          setMasterDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("masterDescription", masterDescription)
        }
        errorMessage={errors.masterDescription?.errorMessage}
        hasError={errors.masterDescription?.hasError}
        {...getOverrideProps(overrides, "masterDescription")}
      ></TextField>
      <TextField
        label="Display order"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={displayOrder}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              masterTitle,
              categoryName,
              masterName,
              masterDescription,
              displayOrder: value,
              isActive,
              createdBy,
              modifiedBy,
            };
            const result = onChange(modelFields);
            value = result?.displayOrder ?? value;
          }
          if (errors.displayOrder?.hasError) {
            runValidationTasks("displayOrder", value);
          }
          setDisplayOrder(value);
        }}
        onBlur={() => runValidationTasks("displayOrder", displayOrder)}
        errorMessage={errors.displayOrder?.errorMessage}
        hasError={errors.displayOrder?.hasError}
        {...getOverrideProps(overrides, "displayOrder")}
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
              masterTitle,
              categoryName,
              masterName,
              masterDescription,
              displayOrder,
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
              masterTitle,
              categoryName,
              masterName,
              masterDescription,
              displayOrder,
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
              masterTitle,
              categoryName,
              masterName,
              masterDescription,
              displayOrder,
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
