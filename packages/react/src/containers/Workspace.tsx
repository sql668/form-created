import React, { useMemo, useRef, Fragment } from 'react'
import { useDesigner } from '../hooks'
import { WorkspaceContext } from '../context'
export interface IWorkspaceProps {
  children?: React.ReactNode;
  id?: string // 需要多个工作区时需要各配置唯一的 ID
  title?: string
  description?: string
}

/**
 * 工作区组件，核心组件，中间部分的区域，展示选择的组件
 * 是一个 HOC,用于管理工作区内的拖拽行为，树节点数据等等
 * @param param0 
 * @returns 
 */
export const Workspace: React.FC<IWorkspaceProps> = ({
  id,
  title,
  description,
  ...props
}) => {
  const oldId = useRef<string>()
  const designer = useDesigner()
  const workspace = useMemo(() => {
    if (!designer) return
    if (oldId.current && oldId.current !== id) {
      const old = designer.workbench.findWorkspaceById(oldId.current)
      if (old) old.viewport.detachEvents()
    }
    const workspace = {
      id: id || 'index',
      title,
      description,
    }
    designer.workbench.ensureWorkspace(workspace)
    oldId.current = workspace.id
    return workspace
  }, [id, designer])
  return (
    <Fragment>
      <WorkspaceContext.Provider value={workspace}>
        {props.children}
      </WorkspaceContext.Provider>
    </Fragment>
  )
}
