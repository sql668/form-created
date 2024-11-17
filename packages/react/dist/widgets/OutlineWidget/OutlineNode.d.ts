import React from 'react';
import { TreeNode } from '@form-created/core';
export interface IOutlineTreeNodeProps {
    node: TreeNode;
    style?: React.CSSProperties;
    className?: string;
    workspaceId?: string;
}
export declare const OutlineTreeNode: React.FC<IOutlineTreeNodeProps>;
