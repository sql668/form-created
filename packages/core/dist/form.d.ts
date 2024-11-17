/// <reference types="react" />
import { IFormProps, Form } from '@formily/core';
export interface SlotProps {
    [key: string]: (form: Form) => React.ReactNode;
}
export interface CreateFormProps extends IFormProps {
    extConfig?: {
        slots: SlotProps;
        [key: string]: any;
    };
}
export interface CForm extends Form {
    extConfig?: {
        slots: SlotProps;
        [key: string]: any;
    };
}
export declare const createExtForm: (props?: CreateFormProps) => Form<any>;
