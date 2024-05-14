import { CustomType } from "../enums/custom-type";

export interface Column<T> {
    label: string;
    property: keyof T;
    showCustom?: boolean;
    customType?: CustomType;
    customContent?: string;
    action?: () => void;
    iconColor?: string;
}