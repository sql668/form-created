import { EventDriver } from '@form-created/shared';
export declare class KeyboardDriver extends EventDriver {
    onKeyDown: (e: KeyboardEvent) => void;
    onKeyUp: (e: KeyboardEvent) => void;
    attach(): void;
    detach(): void;
}
