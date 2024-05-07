import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';
import { resolve } from 'path';

// Icons 自动按需引入图标库
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [
			vue(),
			Unocss(),
			Icons({ autoInstall: true }), // 自动安装icon
			// -- 浏览器兼容
			legacy({
				targets: ['defaults', 'not IE 11']
			}),
			Components({
				resolvers: [
					IconsResolver(),
					// Ant Design Vue 4.x 自动按需引入组件
					AntDesignVueResolver({
						importStyle: false // css in js
					})
				]
			}),
			AutoImport({
				dts: true,
				// global imports to register
				imports: ['vue', 'vue-router'],
				eslintrc: {
					enabled: true
				}
			})
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
				assets: resolve(__dirname, 'src/assets'),
				comps: resolve(__dirname, 'src/components'),
				utils: resolve(__dirname, 'src/utils')
			}
		},
		server: {
			open: true,
			//配置自定义代理规则
			[env.VITE_APP_BASE_API]: {
				target: env.VITE_APP_BASE_URL,
				changeOrigin: true,
				rewrite: (path: string) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
			}
		},
		build: {
			sourcemap: env.VITE_ENV !== 'prod',
			// -- chunk 大小警告的限制（以 kbs 为单位）
			chunkSizeWarningLimit: 2000,
			// -- 启用/禁用 gzip 压缩大小报告
			reportCompressedSize: false
		}
	};
});
