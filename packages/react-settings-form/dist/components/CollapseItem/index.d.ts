import React from 'react';
export interface ICollapseItemProps {
    className?: string;
    style?: React.CSSProperties;
    defaultExpand?: boolean;
}
export declare const CollapseItem: React.FC<ICollapseItemProps>;
