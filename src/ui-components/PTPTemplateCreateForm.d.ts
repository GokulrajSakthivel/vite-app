/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PTPTemplateCreateFormInputValues = {
    templateDefId?: string;
    status?: string;
    createdBy?: string;
    modifiedBy?: string;
};
export declare type PTPTemplateCreateFormValidationValues = {
    templateDefId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    modifiedBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PTPTemplateCreateFormOverridesProps = {
    PTPTemplateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    templateDefId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    modifiedBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PTPTemplateCreateFormProps = React.PropsWithChildren<{
    overrides?: PTPTemplateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PTPTemplateCreateFormInputValues) => PTPTemplateCreateFormInputValues;
    onSuccess?: (fields: PTPTemplateCreateFormInputValues) => void;
    onError?: (fields: PTPTemplateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PTPTemplateCreateFormInputValues) => PTPTemplateCreateFormInputValues;
    onValidate?: PTPTemplateCreateFormValidationValues;
} & React.CSSProperties>;
export default function PTPTemplateCreateForm(props: PTPTemplateCreateFormProps): React.ReactElement;
