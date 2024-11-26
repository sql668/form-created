import React from 'react';
export interface ICompositePanelProps {
    children?: React.ReactNode;
    direction?: 'left' | 'right';
    showNavTitle?: boolean;
    defaultOpen?: boolean;
    defaultPinning?: boolean;
    defaultActiveKey?: number;
    activeKey?: number | string;
    onChange?: (activeKey: number | string) => void;
}
export interface ICompositePanelItemProps {
    children?: React.ReactNode;
    shape?: 'tab' | 'button' | 'link';
    title?: React.ReactNode;
    icon?: React.ReactNode;
    key?: number | string;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    extra?: React.ReactNode;
}
/**
 * 左侧功能面板 组件、大纲、历史记录...
 * 可以根据业务，自行扩展
 * @param props
 * @returns
 */
export declare const CompositePanel: React.FC<ICompositePanelProps> & {
    Item: React.FC<ICompositePanelItemProps>;
};
