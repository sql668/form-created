import React from 'react';
export interface IEmptyWidgetProps {
    children?: React.ReactNode;
    dragTipsDirection?: 'left' | 'right';
}
export declare const EmptyWidget: React.FC<IEmptyWidgetProps>;
