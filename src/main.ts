import { createApp } from 'vue';
import pinia from './store';
import LocalApp from './LocalApp.vue';
import router from './router';
import i18n from './language';
import directives from './directives';
import filters from './filters';

/** 重置样式 这里引入自定义的重置样式也可 */
import '@unocss/reset/tailwind-compat.css';
import 'ant-design-vue/dist/reset.css';
import 'virtual:uno.css';
import './style.css';

const app = createApp(LocalApp);

directives(app); // 自定义指令
app.config.globalProperties.$filters = filters; // 全局过滤器

app
	.use(i18n) // 国际化
	.use(pinia) // 注册store
	.use(router)
	.mount('#app');
