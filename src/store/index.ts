import { createPinia } from 'pinia';
import { useCounterStore1 } from './modules/optionDemo';
import { useCounterStore } from './modules/setupDemo';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export { useCounterStore1, useCounterStore };

export default pinia;
