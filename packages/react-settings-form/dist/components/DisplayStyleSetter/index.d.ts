import React from 'react';
export interface IDisplayStyleSetterProps {
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    onChange?: (value: string) => void;
}
export declare const DisplayStyleSetter: React.FC<IDisplayStyleSetterProps>;
