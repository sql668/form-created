import React from 'react';
type CaseProp = {
    title: string;
    span?: number;
    icon?: any;
    schema?: Record<string, any>;
};
export type CaseWidgetProps = {
    className?: string;
    defaultExpand?: boolean;
    title: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
    cases: CaseProp[];
    onClick?: (e: any, casedata: CaseProp) => void;
};
export declare const CaseWidget: React.FC<CaseWidgetProps>;
export {};
