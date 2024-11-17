import React from 'react';
export interface IWorkspaceProps {
    children?: React.ReactNode;
    id?: string;
    title?: string;
    description?: string;
}
export declare const Workspace: React.FC<IWorkspaceProps>;
