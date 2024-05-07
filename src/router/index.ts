import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE),
	routes
});

// 导航守卫
router.beforeEach(async (_to, _from, next) => {
	NProgress.start();
	next();
});

router.afterEach((to) => {
	NProgress.done();
	// → 设置标题
	document.title = to.meta.title ? (to.meta.title as string) : '';
	// → 滚动
	window.scrollTo(0, 0);
});

export default router;
