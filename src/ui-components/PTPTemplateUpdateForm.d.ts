/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PTPTemplate } from "../models";
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
export declare type PTPTemplateUpdateFormInputValues = {
    templateDefId?: string;
    status?: string;
    createdBy?: string;
    modifiedBy?: string;
};
export declare type PTPTemplateUpdateFormValidationValues = {
    templateDefId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    modifiedBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PTPTemplateUpdateFormOverridesProps = {
    PTPTemplateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    templateDefId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    modifiedBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PTPTemplateUpdateFormProps = React.PropsWithChildren<{
    overrides?: PTPTemplateUpdateFormOverridesProps | undefined | null;
} & {
    templateDefId?: string;
    pTPTemplate?: PTPTemplate;
    onSubmit?: (fields: PTPTemplateUpdateFormInputValues) => PTPTemplateUpdateFormInputValues;
    onSuccess?: (fields: PTPTemplateUpdateFormInputValues) => void;
    onError?: (fields: PTPTemplateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PTPTemplateUpdateFormInputValues) => PTPTemplateUpdateFormInputValues;
    onValidate?: PTPTemplateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PTPTemplateUpdateForm(props: PTPTemplateUpdateFormProps): React.ReactElement;
