import React from 'react';
import { TreeNode } from '@form-created/core';
import { Rect } from '@form-created/shared';
export interface IHelpersProps {
    node: TreeNode;
    nodeRect: Rect;
}
export interface IViewportState {
    viewportWidth?: number;
    viewportHeight?: number;
    viewportScrollX?: number;
    viewportScrollY?: number;
    viewportIsScrollTop?: boolean;
    viewportIsScrollBottom?: boolean;
}
export declare const Helpers: React.FC<IHelpersProps>;
