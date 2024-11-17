import React from 'react';
export interface IColorInputProps {
    value?: string;
    onChange?: (color: string) => void;
}
export declare const ColorInput: React.FC<IColorInputProps>;
