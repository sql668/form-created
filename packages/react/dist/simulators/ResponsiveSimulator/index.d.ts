import React from 'react';
export interface IResponsiveSimulatorProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
}
export declare const ResponsiveSimulator: React.FC<IResponsiveSimulatorProps>;
