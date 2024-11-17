import { useForm } from "@formily/react"
import {CForm, createBehavior, createResource} from "@form-created/core"
import { DnFC, useCssInJs } from '@form-created/react';
import { createVoidFieldSchema } from '../Field';
import { genSlotStyle } from "./styles";
import React from "react";
import cls from 'classnames';
import { AllSchemas } from "../../schemas";
import { AllLocales } from "../../locales";

export interface SlotProps {
  className?:string
  slotName:string
}
export const Slot:DnFC<SlotProps> = ({slotName,className}) => { 
  const form: CForm = useForm()
  const prefix = 'dn-slot';
  const { hashId, wrapSSR } = useCssInJs({ prefix, styleFun: genSlotStyle });

  return wrapSSR(
    <div className={cls(prefix, className, hashId)}>
      { 
        form.extConfig?.slots?.[slotName] ? (form.extConfig?.slots?.[slotName](form)) : (<div style={{backgroundColor:"#eee",padding:"4px"}}>插槽占位 { slotName }</div>)
      }
    </div>
  )
}

Slot.Behavior = createBehavior({
  name: 'Slot',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Slot',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.Slot),
  },
  designerLocales: AllLocales.Slot,
});

Slot.Resource = createResource({
  icon: 'SlotSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        'x-component': 'Slot',
      },
    },
  ],
});