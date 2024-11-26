export interface IPoint {
    x: number;
    y: number;
}
export interface ISize {
    width: number;
    height: number;
}
export interface ILineSegment {
    start: IPoint;
    end: IPoint;
}
export interface IRectEdgeLines {
    v: ILineSegment[];
    h: ILineSegment[];
}
export declare function isRect(rect: any): rect is IRect;
export declare function isPoint(val: any): val is IPoint;
export declare function isLineSegment(val: any): val is ILineSegment;
export declare class Point implements IPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export declare class Rect implements IRect {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    get left(): number;
    get right(): number;
    get top(): number;
    get bottom(): number;
}
export declare class LineSegment {
    start: IPoint;
    end: IPoint;
    constructor(start: IPoint, end: IPoint);
}
export interface IRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare enum RectQuadrant {
    Inner1 = "I1",//内部第一象限
    Inner2 = "I2",//内部第二象限
    Inner3 = "I3",//内部第三象限
    Inner4 = "I4",//内部第四象限
    Outer1 = "O1",//外部第一象限
    Outer2 = "O2",//外部第二象限
    Outer3 = "O3",//外部第三象限
    Outer4 = "O4"
}
export interface IPointToRectRelative {
    quadrant: RectQuadrant;
    distance: number;
}
/**
 * 点是否在矩形内，前两个参数分别是点和矩形。 第三个参数是“是否敏感”，如果关闭，点在矩形内就可以返回 true 了；如果关闭，点在矩形的宽高-10%的范围内才返回 true
 * @param point
 * @param rect
 * @param sensitive
 * @returns
 */
export declare function isPointInRect(point: IPoint, rect: IRect, sensitive?: boolean): boolean;
export declare function isEqualRect(target: IRect, source: IRect): boolean;
/**
 * 返回矩形的四个点的坐标
 * @param source
 * @returns
 */
export declare function getRectPoints(source: IRect): Point[];
/**
 * 矩形是否在矩形内，
 * @param target
 * @param source
 * @returns
 */
export declare function isRectInRect(target: IRect, source: IRect): boolean;
/**
 * 两个矩形是否存在交集
 * @param target
 * @param source
 * @returns
 */
export declare function isCrossRectInRect(target: IRect, source: IRect): boolean;
/**
 * 计算点在矩形的哪个象限
 * @param point
 * @param rect
 */
export declare function calcQuadrantOfPointToRect(point: IPoint, rect: IRect): RectQuadrant;
/**
 * 点跟矩形之间的距离
 * @param point
 * @param rect
 * @returns
 */
export declare function calcDistanceOfPointToRect(point: IPoint, rect: IRect): number;
/**
 * 点到边的距离
 * @param point
 * @param rect
 * @returns
 */
export declare function calcDistancePointToEdge(point: IPoint, rect: IRect): number;
/**
 * 计算点的位置是否在矩形的下方或者右下方 比如拖拽组件时，把组件放置在另一个组件的“下方或者右下方”可以视为插入在其后面，否则就插入到其前面
 * @param point
 * @param rect
 * @param inline
 * @returns
 */
export declare function isNearAfter(point: IPoint, rect: IRect, inline?: boolean): boolean;
/**
 * 点在矩形里的相对位置
 * @param point
 * @param rect
 */
export declare function calcRelativeOfPointToRect(point: IPoint, rect: IRect): IPointToRectRelative;
/**
 * 可以把多个矩形合并计算成一个更大的矩形
 * @param rects
 * @returns
 */
export declare function calcBoundingRect(rects: IRect[]): Rect;
/**
 * 按起点和终点计算矩形
 * @param startPoint
 * @param endPoint
 * @param scrollX
 * @param scrollY
 * @returns
 */
export declare function calcRectByStartEndPoint(startPoint: IPoint, endPoint: IPoint, scrollX?: number, scrollY?: number): Rect;
export declare function calcEdgeLinesOfRect(rect: IRect): IRectEdgeLines;
export declare function calcRectOfAxisLineSegment(line: ILineSegment): Rect;
export declare function calcSpaceBlockOfRect(target: IRect, source: IRect, type?: string): {
    type: string;
    distance: number;
    rect: Rect;
};
export declare function calcExtendsLineSegmentOfRect(targetRect: Rect, referRect: Rect): {
    start: {
        x: number;
        y: number;
    };
    end: {
        x: number;
        y: number;
    };
};
export declare function calcOffsetOfSnapLineSegmentToEdge(line: ILineSegment, current: IRect): {
    x: number;
    y: number;
};
export declare function calcDistanceOfSnapLineToEdges(line: ILineSegment, edges: IRectEdgeLines): number;
export declare function calcCombineSnapLineSegment(target: ILineSegment, source: ILineSegment): ILineSegment;
export declare function calcClosestEdges(line: ILineSegment, edges: IRectEdgeLines): [number, ILineSegment];
