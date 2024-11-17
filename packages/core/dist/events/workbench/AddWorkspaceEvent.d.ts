import { ICustomEvent } from '@form-created/shared';
import { AbstractWorkspaceEvent } from './AbstractWorkspaceEvent';
export declare class AddWorkspaceEvent extends AbstractWorkspaceEvent implements ICustomEvent {
    type: string;
}
