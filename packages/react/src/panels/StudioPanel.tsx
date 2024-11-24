import React from 'react';
import { useCssInJs, usePosition, usePrefix } from '../hooks';
import { Layout } from '../containers';
import cls from 'classnames';
import { genStudioPanelStyle } from './styles';

export interface IStudioPanelProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  logo?: React.ReactNode; // 左上角logo区
  actions?: React.ReactNode; // 右上角操作区
  prefixCls?: string;
  theme?: string;
  position?: React.ComponentProps<typeof Layout>['position'];
}

const StudioPanelInternal: React.FC<IStudioPanelProps> = ({
  logo,
  actions,
  ...props
}) => {
  const prefix = usePrefix('main-panel');
  const position = usePosition();
  const classNameBase = cls('root', position, props.className);

  const { hashId, wrapSSR } = useCssInJs({
    prefix,
    styleFun: genStudioPanelStyle,
  });

  if (logo || actions) {
    return wrapSSR(
      <div
        {...props}
        className={cls(`${prefix}-container`, classNameBase, hashId)}
      >
        <div className={cls(prefix + '-header', hashId)}>
          <div className={cls(prefix + '-header-logo', hashId)}>{logo}</div>
          <div className={cls(prefix + '-header-actions', hashId)}>
            {actions}
          </div>
        </div>
        <div className={cls(prefix, hashId)}>{props.children}</div>
      </div>,
    );
  }
  return wrapSSR(
    <div
      {...props}
      className={cls(`${prefix}-container`, classNameBase, hashId)}
    >
      {props.children}
    </div>,
  );
};

// 主布局面板，整个工程的壳。
export const StudioPanel: React.FC<IStudioPanelProps> = (props) => {
  return (
    <Layout
      theme={props.theme}
      prefixCls={props.prefixCls}
      position={props.position}
    >
      <StudioPanelInternal {...props} />
    </Layout>
  );
};
