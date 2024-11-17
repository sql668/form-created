import { ICustomEvent } from '@form-created/shared';
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent';
export declare class UpdateNodePropsEvent extends AbstractMutationNodeEvent implements ICustomEvent {
    type: string;
}
