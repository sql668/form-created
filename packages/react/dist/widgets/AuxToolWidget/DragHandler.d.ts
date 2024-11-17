import React from 'react';
import { TreeNode } from '@form-created/core';
export interface IDragHandlerProps {
    node: TreeNode;
    style?: React.CSSProperties;
}
export declare const DragHandler: React.FC<IDragHandlerProps>;
