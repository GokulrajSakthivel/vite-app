/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ProjectSiteHierarchy } from "../models";
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
export declare type ProjectSiteHierarchyUpdateFormInputValues = {
    userId?: string;
    projectSortKey?: string;
    entityType?: string;
    region?: string;
    businessUnit?: string;
    projectSite?: string;
};
export declare type ProjectSiteHierarchyUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    projectSortKey?: ValidationFunction<string>;
    entityType?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    businessUnit?: ValidationFunction<string>;
    projectSite?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectSiteHierarchyUpdateFormOverridesProps = {
    ProjectSiteHierarchyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    projectSortKey?: PrimitiveOverrideProps<TextFieldProps>;
    entityType?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    businessUnit?: PrimitiveOverrideProps<TextFieldProps>;
    projectSite?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectSiteHierarchyUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjectSiteHierarchyUpdateFormOverridesProps | undefined | null;
} & {
    id?: {
        userId: string;
        projectSortKey: string;
    };
    projectSiteHierarchy?: ProjectSiteHierarchy;
    onSubmit?: (fields: ProjectSiteHierarchyUpdateFormInputValues) => ProjectSiteHierarchyUpdateFormInputValues;
    onSuccess?: (fields: ProjectSiteHierarchyUpdateFormInputValues) => void;
    onError?: (fields: ProjectSiteHierarchyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectSiteHierarchyUpdateFormInputValues) => ProjectSiteHierarchyUpdateFormInputValues;
    onValidate?: ProjectSiteHierarchyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectSiteHierarchyUpdateForm(props: ProjectSiteHierarchyUpdateFormProps): React.ReactElement;
