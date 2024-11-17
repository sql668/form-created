/// <reference types="react" />
import { CSSInterpolation } from '@ant-design/cssinjs';
type CssInJsProps = {
    prefix?: string;
    styleFun?: (prefix: string, token?: any) => CSSInterpolation;
};
export declare const useCssInJs: (params?: CssInJsProps) => {
    hashId: string;
    wrapSSR: (node: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").JSX.Element;
};
export {};
