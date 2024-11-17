import React from 'react';
export declare enum ResizeHandleType {
    Resize = "RESIZE",
    ResizeWidth = "RESIZE_WIDTH",
    ResizeHeight = "RESIZE_HEIGHT"
}
export interface IResizeHandleProps {
    children?: React.ReactNode;
    type?: ResizeHandleType;
}
export declare const ResizeHandle: React.FC<IResizeHandleProps>;
