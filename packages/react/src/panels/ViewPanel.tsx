import React, { useEffect, useState } from 'react'
import { TreeNode, ITreeNode, WorkbenchTypes } from '@form-created/core'
import { observer } from '@formily/reactive-react'
import { useTree, useWorkbench } from '../hooks'
import { Viewport } from '../containers'
import { requestIdle } from '@form-created/shared'

export interface IViewPanelProps {
  type: WorkbenchTypes // 容器类型，用于标识它是什么视图模式的容器
  children: (
    tree: TreeNode,
    onChange: (tree: ITreeNode) => void
  ) => React.ReactElement
  scrollable?: boolean // 容器的内容溢出是否需要滚动条，如果开启样式的 overflow 等于 overlay，关闭则为 hidden。
  dragTipsDirection?: 'left' | 'right' // 可视化设计（type=DESIGNABLE）的模式时，缺省状态的操作动画，从左往右还是从右往左。
}

// 视图布局面板，也就是设计器最中心区域的“壳”。它是四种视图模式（可视化设计、json、jsx、预览）的容器组件，并给子组件赋能。
export const ViewPanel: React.FC<IViewPanelProps> = observer((props) => {
  const { scrollable = true} = props
  const [visible, setVisible] = useState(true)
  const workbench = useWorkbench()
  const tree = useTree()
  useEffect(() => {
    if (workbench.type === props.type) {
      requestIdle(() => {
        requestAnimationFrame(() => {
          setVisible(true)
        })
      })
    } else {
      setVisible(false)
    }
  }, [workbench.type])
  if (workbench.type !== props.type) return null
  const render = () => {
    return props.children(tree, (payload) => {
      tree.from(payload)
      tree.takeSnapshot()
    })
  }
  if (workbench.type === 'DESIGNABLE')
    return (
      <Viewport dragTipsDirection={props.dragTipsDirection}>
        {render()}
      </Viewport>
    )
  return (
    <div
      style={{
        overflow: scrollable ? 'overlay' : 'hidden',
        height: '100%',
        cursor: 'auto',
        userSelect: 'text',
      }}
    >
      {visible && render()}
    </div>
  )
})

// ViewPanel.defaultProps = {
//   scrollable: true,
// }
