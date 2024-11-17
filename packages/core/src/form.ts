import { createForm, IFormProps,Form } from '@formily/core'
export interface SlotProps{
  [key: string]: (form:Form) => React.ReactNode
}
export interface CreateFormProps extends IFormProps {
  extConfig?: {
    slots: SlotProps,
    [key:string]:any
  }
}

export interface CForm extends Form {
  extConfig?: {
    slots: SlotProps,
    [key:string]:any
  }
}

export const createExtForm = (props: CreateFormProps = {}) => {
  const { extConfig,...formilyFormProps} = props
  const form = createForm({
    ...formilyFormProps
  });
  Object.assign(form, { extConfig: {...extConfig} });
  return form;
};