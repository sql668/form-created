import * as Core from './exports'
export * from './exports'
import { globalThisPolyfill } from '@form-created/shared'

if (globalThisPolyfill?.['FormCreated']?.['Core']) {
  if (module.exports) {
    module.exports = {
      __esModule: true,
      ...globalThisPolyfill['FormCreated']['Core'],
    }
  }
} else {
  globalThisPolyfill['FormCreated'] = globalThisPolyfill['FormCreated'] || {}
  globalThisPolyfill['FormCreated'].Core = Core
}
