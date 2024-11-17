import React from 'react';
export interface IMobileSimulatorProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
}
export declare const MobileSimulator: React.FC<IMobileSimulatorProps>;
