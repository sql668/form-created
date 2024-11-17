import { ICustomEvent } from '@form-created/shared';
import { AbstractCursorEvent } from './AbstractCursorEvent';
export declare class DragMoveEvent extends AbstractCursorEvent implements ICustomEvent {
    type: string;
}
