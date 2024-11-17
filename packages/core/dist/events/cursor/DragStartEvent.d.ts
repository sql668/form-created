import { ICustomEvent } from '@form-created/shared';
import { AbstractCursorEvent } from './AbstractCursorEvent';
export declare class DragStartEvent extends AbstractCursorEvent implements ICustomEvent {
    type: string;
}
