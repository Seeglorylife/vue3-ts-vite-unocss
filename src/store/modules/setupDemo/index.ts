/* Setup Store */
import { defineStore, acceptHMRUpdate } from 'pinia';
import { computed, ref } from 'vue';

// defineStore第三个参数中启用持久化配置
//  当启用持久化后，pinia数据发生改变时，会自动将数据存到localStorage中
//  当页面刷新后，会自动读取localStorage
export const useCounterStore = defineStore(
	'counter',
	() => {
		const count = ref(0);
		const doubleCount = computed(() => count.value * 2);
		function increment() {
			count.value++;
		}

		return { count, doubleCount, increment };
	},
	{
		persist: true // 开启pinia数据持久化
	}
);

// 确保传递正确的 store 声明
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
