<script setup lang="ts">
import { ref } from 'vue';
import App from './App.vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('cn');

const locale = ref(zhCN.locale); // TODO 可以后续读取全局store变量
</script>

<template>
	<a-config-provider :locale="locale === 'en' ? enUS : zhCN">
		<App />
	</a-config-provider>
</template>
