import React from 'react';
import { ITreeDataSource } from './types';
export interface ITreePanelProps {
    treeDataSource: ITreeDataSource;
    allowTree: boolean;
    defaultOptionValue: {
        label: string;
        value: any;
    }[];
}
export declare const TreePanel: React.FC<ITreePanelProps>;
