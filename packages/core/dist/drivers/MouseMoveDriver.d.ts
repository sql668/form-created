import { EventDriver } from '@form-created/shared';
import { Engine } from '../models/Engine';
export declare class MouseMoveDriver extends EventDriver<Engine> {
    request: any;
    onMouseMove: (e: MouseEvent) => void;
    attach(): void;
    detach(): void;
}
