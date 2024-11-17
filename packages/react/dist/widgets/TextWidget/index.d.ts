import React from 'react';
import { IDesignerMiniLocales } from '@form-created/core';
export interface ITextWidgetProps {
    children?: React.ReactNode;
    componentName?: string;
    sourceName?: string;
    token?: string | IDesignerMiniLocales;
    defaultMessage?: string | IDesignerMiniLocales;
}
export declare const TextWidget: React.FC<ITextWidgetProps>;
