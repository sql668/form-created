import React from 'react';
export interface IPositionInputProps {
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    onChange?: (value: string) => void;
}
export declare const PositionInput: React.FC<IPositionInputProps>;
