import { mountDomRenderer } from 'react-cosmos/dom';
import { decorators, fixtures, rendererConfig } from './cosmos.userdeps';

mountDomRenderer({ rendererConfig, decorators, fixtures });

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
