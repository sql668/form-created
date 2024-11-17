import { ICustomEvent } from '@form-created/shared';
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent';
export declare class RemoveNodeEvent extends AbstractMutationNodeEvent implements ICustomEvent {
    type: string;
}
