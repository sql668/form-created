import React from 'react'
import { ScreenType } from '@form-created/core'
import { requestIdle } from '@form-created/shared'
import { observer } from '@formily/reactive-react'
import { useScreen } from '../hooks'
import {
  MobileSimulator,
  PCSimulator,
  ResponsiveSimulator,
} from '../simulators'

export type ISimulatorProps = React.HTMLAttributes<HTMLDivElement>

// 视图模拟器组件，通过适当配置，可以实现给中间的操作区套上“手机壳”、“自适应壳“的展示
export const Simulator: React.FC<ISimulatorProps> = observer(
  (props: ISimulatorProps) => {
    const screen = useScreen()
    if (screen.type === ScreenType.PC)
      return <PCSimulator {...props}>{props.children}</PCSimulator>
    if (screen.type === ScreenType.Mobile)
      return <MobileSimulator {...props}>{props.children}</MobileSimulator>
    if (screen.type === ScreenType.Responsive)
      return (
        <ResponsiveSimulator {...props}>{props.children}</ResponsiveSimulator>
      )
    return <PCSimulator {...props}>{props.children}</PCSimulator>
  },
  {
    scheduler: requestIdle,
  }
)
