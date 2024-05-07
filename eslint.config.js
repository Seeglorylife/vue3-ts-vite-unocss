import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		extends: [
			'@unocss',
			'airbnb-base',
			'plugin:prettier/recommended',
			'./.eslintrc-auto-import.json'
		]
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential']
];
