import React from 'react';
import { DnFC } from '@form-created/react';
export interface IDesignableTextProps {
    value?: string;
    content?: string;
    mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p';
    style?: React.CSSProperties;
    className?: string;
}
export declare const Text: DnFC<IDesignableTextProps>;
