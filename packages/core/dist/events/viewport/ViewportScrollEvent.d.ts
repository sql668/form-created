import { ICustomEvent } from '@form-created/shared';
import { AbstractViewportEvent } from './AbstractViewportEvent';
export declare class ViewportScrollEvent extends AbstractViewportEvent implements ICustomEvent {
    type: string;
}
