import React from 'react'
import { WorkspacePanel, IWorkspaceItemProps } from './WorkspacePanel'
import { Simulator } from '../containers'

// 工具栏布局面板（设计器最中心区域的“编辑区”），它用模拟器组件Simulator给子组件做了布局
export const ViewportPanel: React.FC<IWorkspaceItemProps> = (props) => {
  return (
    <WorkspacePanel.Item {...props} flexable>
      <Simulator>{props.children}</Simulator>
    </WorkspacePanel.Item>
  )
}
