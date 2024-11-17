import { ICustomEvent } from '@form-created/shared';
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent';
export declare class InsertChildrenEvent extends AbstractMutationNodeEvent implements ICustomEvent {
    type: string;
}
