import { ISchema } from '@formily/react'

export const Slot: ISchema = {
  type: 'object',
  properties: {
    slotName: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}