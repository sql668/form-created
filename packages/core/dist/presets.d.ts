import { DragDropDriver, MouseClickDriver, MouseMoveDriver, ViewportResizeDriver, ViewportScrollDriver, KeyboardDriver } from './drivers';
export declare const DEFAULT_EFFECTS: ((engine: import("./models").Engine) => void)[];
export declare const DEFAULT_DRIVERS: (typeof MouseMoveDriver | typeof DragDropDriver | typeof MouseClickDriver | typeof ViewportResizeDriver | typeof ViewportScrollDriver | typeof KeyboardDriver)[];
export declare const DEFAULT_SHORTCUTS: import("./models").Shortcut[];
