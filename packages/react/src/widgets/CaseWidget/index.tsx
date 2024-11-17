import React, { useState } from 'react';
import { observer } from "@formily/reactive-react";
import cls from 'classnames';
import { useCssInJs, usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { TextWidget } from '../TextWidget';
import { genCaseWidgetStyle } from "./style";
import { isFn } from '@form-created/shared';

type CaseProp = {
  title: string,
  span?: number;
  icon?: any,
  schema?: Record<string,any>
  //iconInfer?:React.ReactNode
}

export type CaseWidgetProps = {
  className?: string,
  defaultExpand?: boolean,
  title: React.ReactNode,
  description?: React.ReactNode,
  children?: React.ReactNode,
  cases: CaseProp[],
  onClick?: (e,casedata:CaseProp) => void
}
export const CaseWidget: React.FC<CaseWidgetProps> = observer((props) => { 
  const { className,defaultExpand = true, cases,onClick } = props;
  const prefix = usePrefix('case');
  const [expand, setExpand] = useState(defaultExpand);
  const { hashId, wrapSSR } = useCssInJs({
    prefix,
    styleFun: genCaseWidgetStyle,
  });
  //const designer= useDesigner()

  const renderNode = (casedata: CaseProp) => { 
    const { title, icon } = casedata;
    return (
      <div
        className={cls(prefix + '-item', hashId)}
        style={{ gridColumnStart: `span ${1}` }}
        key={title}
        onClick={(e) => onClick(e,casedata)}
      >
        {icon && React.isValidElement(icon) ? (
            <>{icon}</>
          ) : (
            <IconWidget
              className={cls(prefix + '-item-icon', hashId)}
              infer={icon}
              style={{ width: 150, height: 40 }}
            />
        )}
        
        <span className={cls(prefix + '-item-text', hashId)}>
            {
              <TextWidget>
                {title}
              </TextWidget>
            }
          </span>
        
      </div>
    )
  }

const remainItems =
      cases.reduce((length, source) => {
        return length + (source.span ?? 1);
      }, 0) % 3;
  return wrapSSR(
    <div className={cls(prefix,
          className,
          {
            expand,
          },
          hashId,)}>
      <div
          className={cls(prefix + '-header', hashId)}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setExpand(!expand);
          }}
        >
          <div className={cls(prefix + '-header-expand', hashId)}>
            <IconWidget infer="Expand" size={10} />
          </div>
          <div className={cls(prefix + '-header-content', hashId)}>
            <TextWidget>{props.title}</TextWidget>
          </div>
      </div>
      <div className={cls(prefix + '-content-wrapper', hashId)}>
          <div className={cls(prefix + '-content', hashId)}>
            {cases.map(isFn(props.children) ? props.children : renderNode)}
            {remainItems ? (
              <div
                className={cls(prefix + '-item-remain', hashId)}
                style={{ gridColumnStart: `span ${3 - remainItems}` }}
              ></div>
            ) : null}
          </div>
        </div>
    </div>
  )
})