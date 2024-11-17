import React, { ReactNode } from 'react';
export interface IHeaderProps {
    extra: ReactNode | null;
    title: ReactNode | string;
}
export declare const Header: React.FC<IHeaderProps>;
