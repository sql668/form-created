import React from 'react';
import { IResourceLike, IResource } from '@form-created/core';
export type SourceMapper = (resource: IResource) => React.ReactNode;
export interface IResourceWidgetProps {
    title: React.ReactNode;
    sources?: IResourceLike[];
    className?: string;
    defaultExpand?: boolean;
    children?: SourceMapper | React.ReactElement;
}
export declare const ResourceWidget: React.FC<IResourceWidgetProps>;
