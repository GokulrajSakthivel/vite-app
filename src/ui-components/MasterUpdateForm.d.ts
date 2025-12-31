/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Master } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MasterUpdateFormInputValues = {
    masterTitle?: string;
    categoryName?: string;
    masterName?: string;
    masterDescription?: string;
    displayOrder?: number;
    isActive?: boolean;
    createdBy?: string;
    modifiedBy?: string;
};
export declare type MasterUpdateFormValidationValues = {
    masterTitle?: ValidationFunction<string>;
    categoryName?: ValidationFunction<string>;
    masterName?: ValidationFunction<string>;
    masterDescription?: ValidationFunction<string>;
    displayOrder?: ValidationFunction<number>;
    isActive?: ValidationFunction<boolean>;
    createdBy?: ValidationFunction<string>;
    modifiedBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MasterUpdateFormOverridesProps = {
    MasterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    masterTitle?: PrimitiveOverrideProps<TextFieldProps>;
    categoryName?: PrimitiveOverrideProps<TextFieldProps>;
    masterName?: PrimitiveOverrideProps<TextFieldProps>;
    masterDescription?: PrimitiveOverrideProps<TextFieldProps>;
    displayOrder?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    modifiedBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MasterUpdateFormProps = React.PropsWithChildren<{
    overrides?: MasterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    master?: Master;
    onSubmit?: (fields: MasterUpdateFormInputValues) => MasterUpdateFormInputValues;
    onSuccess?: (fields: MasterUpdateFormInputValues) => void;
    onError?: (fields: MasterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MasterUpdateFormInputValues) => MasterUpdateFormInputValues;
    onValidate?: MasterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MasterUpdateForm(props: MasterUpdateFormProps): React.ReactElement;
