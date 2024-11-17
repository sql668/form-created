import { GlobalRegistry, IDesignerRegistry } from '@form-created/core'
import { globalThisPolyfill } from '@form-created/shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
