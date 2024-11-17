import React from 'react';
import { TreeNode } from '@form-created/core';
import { INodeActionsWidgetActionProps } from '../NodeActionsWidget';
export interface IDroppableWidgetProps {
    children?: React.ReactNode;
    node?: TreeNode;
    actions?: INodeActionsWidgetActionProps[];
    placeholder?: boolean;
    height?: number;
    style?: React.CSSProperties;
    className?: string;
    hasChildren?: boolean;
}
export declare const DroppableWidget: React.FC<IDroppableWidgetProps>;
