import React from 'react'
import { WorkspacePanel, IWorkspaceItemProps } from './WorkspacePanel'

// 工具栏布局面板（设计器最中心区域上面的“操作区”），包括撤销、选择、视图切换等操作
export const ToolbarPanel: React.FC<IWorkspaceItemProps> = (props) => {
  return (
    <WorkspacePanel.Item
      {...props}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 4,
        padding: '0 4px',
        ...props.style,
      }}
    >
      {props.children}
    </WorkspacePanel.Item>
  )
}
