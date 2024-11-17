import React from 'react';
type ContainerProps = {
    children?: React.ReactNode;
};
export declare const Container: React.FC<ContainerProps>;
export declare const withContainer: (Target: React.JSXElementConstructor<any>) => (props: any) => React.JSX.Element;
export {};
