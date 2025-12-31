/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PtpTemplateDefCreateFormInputValues = {
    templateName?: string;
    isTemplateUsed?: string;
    isActive?: boolean;
    createdBy?: string;
    modifiedBy?: string;
};
export declare type PtpTemplateDefCreateFormValidationValues = {
    templateName?: ValidationFunction<string>;
    isTemplateUsed?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
    createdBy?: ValidationFunction<string>;
    modifiedBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PtpTemplateDefCreateFormOverridesProps = {
    PtpTemplateDefCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    templateName?: PrimitiveOverrideProps<TextFieldProps>;
    isTemplateUsed?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    modifiedBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PtpTemplateDefCreateFormProps = React.PropsWithChildren<{
    overrides?: PtpTemplateDefCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PtpTemplateDefCreateFormInputValues) => PtpTemplateDefCreateFormInputValues;
    onSuccess?: (fields: PtpTemplateDefCreateFormInputValues) => void;
    onError?: (fields: PtpTemplateDefCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PtpTemplateDefCreateFormInputValues) => PtpTemplateDefCreateFormInputValues;
    onValidate?: PtpTemplateDefCreateFormValidationValues;
} & React.CSSProperties>;
export default function PtpTemplateDefCreateForm(props: PtpTemplateDefCreateFormProps): React.ReactElement;
