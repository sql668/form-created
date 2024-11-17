import React from 'react';
import { IFormItemProps } from '@formily/antd-v5';
export declare const FoldItem: React.FC<IFormItemProps & {
    children: React.ReactNode;
}> & {
    Base?: React.FC<{
        children: React.ReactNode;
    }>;
    Extra?: React.FC<{
        children: React.ReactNode;
    }>;
};
