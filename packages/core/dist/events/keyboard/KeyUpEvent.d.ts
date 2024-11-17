import { ICustomEvent } from '@form-created/shared';
import { AbstractKeyboardEvent } from './AbstractKeyboardEvent';
export declare class KeyUpEvent extends AbstractKeyboardEvent implements ICustomEvent {
    type: string;
}
