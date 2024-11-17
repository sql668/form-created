import React from 'react';
export interface IWorkspaceItemProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    flexable?: boolean;
}
export declare const WorkspacePanel: React.FC<{
    children?: React.ReactNode;
}> & {
    Item?: React.FC<IWorkspaceItemProps>;
};
