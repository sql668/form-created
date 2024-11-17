import { ICustomEvent } from '@form-created/shared';
import { AbstractCursorEvent } from './AbstractCursorEvent';
export declare class MouseMoveEvent extends AbstractCursorEvent implements ICustomEvent {
    type: string;
}
