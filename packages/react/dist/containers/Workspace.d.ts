import React from 'react';
export interface IWorkspaceProps {
    children?: React.ReactNode;
    id?: string;
    title?: string;
    description?: string;
}
/**
 * 工作区组件，核心组件，中间部分的区域，展示选择的组件
 * 是一个 HOC,用于管理工作区内的拖拽行为，树节点数据等等
 * @param param0
 * @returns
 */
export declare const Workspace: React.FC<IWorkspaceProps>;
