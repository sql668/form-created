import React from 'react';
import { useCssInJs, usePrefix } from '../hooks';
import { genWorkspacePanelStyle } from './styles';
import cls from 'classnames';
import { theme } from 'antd';
const { useToken } = theme;

export interface IWorkspaceItemProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  flexable?: boolean;
}

// 工作区布局面板
// 纯粹的布局组件（如果把设计器分为左中右三部分，工作区布局面板就是中间部分的“壳”），挂了.dn-workspace-panel样式，仅此而已
// 不过它的子组件WorkspacePanel.Item在其它地方用的满多的，比如 ToolbarPanel、ViewportPanel 都是用它做跟组件。
export const WorkspacePanel: React.FC<{ children?: React.ReactNode }> & {
  Item?: React.FC<IWorkspaceItemProps>;
} = (props) => {
  const prefix = usePrefix('workspace-panel');
  const { hashId, wrapSSR } = useCssInJs({
    prefix,
    styleFun: genWorkspacePanelStyle,
  });
  return wrapSSR(<div className={cls(prefix, hashId)}>{props.children}</div>);
};
const WorkspacePanelItem = (props) => {
  const prefix = usePrefix('workspace-panel-item');
  const { hashId } = useToken();
  return (
    <div
      className={cls(prefix, hashId)}
      style={{
        ...props.style,
        flexGrow: props.flexable ? 1 : 0,
        flexShrink: props.flexable ? 1 : 0,
      }}
    >
      {props.children}
    </div>
  );
};
WorkspacePanel.Item = WorkspacePanelItem;
