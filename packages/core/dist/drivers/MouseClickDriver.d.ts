import { EventDriver } from '@form-created/shared';
import { Engine } from '../models/Engine';
export declare class MouseClickDriver extends EventDriver<Engine> {
    onMouseClick: (e: MouseEvent) => void;
    onMouseDoubleClick: (e: MouseEvent) => void;
    attach(): void;
    detach(): void;
}
