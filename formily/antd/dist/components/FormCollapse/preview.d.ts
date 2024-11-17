import React from 'react';
import { CollapseProps, CollapsePanelProps } from 'antd/lib/collapse';
import { DnFC } from '@form-created/react';
export declare const FormCollapse: DnFC<CollapseProps> & {
    CollapsePanel?: React.FC<CollapsePanelProps>;
};
