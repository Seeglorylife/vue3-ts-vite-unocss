<script setup lang="ts">
import { ref, onUnmounted, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const I18n = useI18n();
const duration = ref(15 * 1000);
const elapsed = ref(0);
const language = ref('zh-cn');

let lastTime: number;
let handle: number;

const update = () => {
	elapsed.value = performance.now() - lastTime;
	if (elapsed.value >= duration.value) {
		cancelAnimationFrame(handle);
	} else {
		handle = requestAnimationFrame(update);
	}
};

const reset = () => {
	elapsed.value = 0;
	lastTime = performance.now();
	update();
};

const progressRate = computed(() => Math.min(elapsed.value / duration.value, 1));

onMounted(() => {
	reset();
});

onUnmounted(() => {
	cancelAnimationFrame(handle);
});

watch(language, (newLang) => {
	console.log('当前的改变值为：', newLang);
	I18n.locale.value = newLang;
});
</script>

<template>
	<div style="margin-bottom: 10px">
		<span>国际化示例：{{ $t('common.more') }}</span>
		<a-radio-group v-model:value="language" style="margin-left: 10px">
			<a-radio value="zh-cn">中文</a-radio>
			<a-radio value="en-us">英文</a-radio>
		</a-radio-group>
	</div>
	<label>Elapsed Time: <progress :value="progressRate"></progress></label>
	<div>{{ (elapsed / 1000).toFixed(1) }}s</div>
	<div>
		Duration: <input type="range" v-model="duration" min="1" max="30000" />
		{{ (duration / 1000).toFixed(1) }}s
	</div>
	<button @click="reset">Reset</button>
</template>

<style scoped>
.elapsed-container {
	width: 300px;
}

.elapsed-bar {
	background-color: red;
	height: 10px;
}
</style>
