import React from 'react';
import { Button, Tooltip } from 'antd';
import { observer } from '@formily/reactive-react';
import { GlobalRegistry, WorkbenchTypes } from '@form-created/core';
import { IconWidget } from '../IconWidget';
import { usePrefix, useWorkbench } from '../../hooks';
import cls from 'classnames';

export interface IViewToolsWidget {
  use?: WorkbenchTypes[];
  style?: React.CSSProperties;
  className?: string;
}

// 视图切换工具 设计、markup、jsonschema、preview
export const ViewToolsWidget: React.FC<IViewToolsWidget> = observer(
  ({ use = ['DESIGNABLE', 'JSONTREE', 'PREVIEW'], style, className }) => {
    const workbench = useWorkbench();
    const prefix = usePrefix('view-tools');
    return (
      <Button.Group style={style} className={cls(prefix, className)}>
        {use.includes('DESIGNABLE') && (
          <Tooltip title={GlobalRegistry.getDesignerMessage('toolbars.Designer')}>
            <Button
              disabled={workbench.type === 'DESIGNABLE'}
              onClick={() => {
                workbench.type = 'DESIGNABLE';
              }}
              size="small"
              >
              <IconWidget infer="Design" />
            </Button>
          </Tooltip>
          
        )}
        {use.includes('JSONTREE') && (
          <Tooltip title={GlobalRegistry.getDesignerMessage('toolbars.JsonTree')}>
            <Button
              disabled={workbench.type === 'JSONTREE'}
              onClick={() => {
                workbench.type = 'JSONTREE';
              }}
              size="small"
              >
              <IconWidget infer="JSON" />
            </Button>
          </Tooltip>
          
        )}
        {use.includes('MARKUP') && (
          <Tooltip title={GlobalRegistry.getDesignerMessage('toolbars.Markup')}>
            <Button
                disabled={workbench.type === 'MARKUP'}
                onClick={() => {
                  workbench.type = 'MARKUP';
                }}
                size="small"
              >
              <IconWidget infer="Code" />
            </Button>
          </Tooltip>
          
        )}
        {use.includes('PREVIEW') && (
          <Tooltip title={GlobalRegistry.getDesignerMessage('toolbars.Preview')}>
            <Button
              disabled={workbench.type === 'PREVIEW'}
              onClick={() => {
                workbench.type = 'PREVIEW';
              }}
              size="small"
              >
                <IconWidget infer="Play" />
          </Button>
          </Tooltip>

          
        )}
      </Button.Group>
    );
  },
);

// ViewToolsWidget.defaultProps = {
//   use: ['DESIGNABLE', 'JSONTREE', 'PREVIEW'],
// };
