import React from 'react';
import { FormGrid as FormilyGird } from '@formily/antd-v5';
import { DnFC } from '@form-created/react';
type formilyGrid = typeof FormilyGird;
export declare const FormGrid: DnFC<React.ComponentProps<formilyGrid>> & {
    GridColumn?: React.FC<React.ComponentProps<formilyGrid['GridColumn']>>;
};
export {};
