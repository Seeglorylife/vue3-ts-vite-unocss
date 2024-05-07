/* Option Store */
import { defineStore, _GettersTree } from 'pinia';
import { StoreProps } from './types';

interface GetterProps extends _GettersTree<StoreProps> {
	double: (state: StoreProps) => number;
}

interface ActionProps {
	increment: () => void;
}

export const useCounterStore1 = defineStore<string, StoreProps, GetterProps, ActionProps>(
	'counter1',
	{
		state: () => ({ count: 0 }),
		getters: {
			double: (state) => state.count * 2
		},
		actions: {
			increment() {
				this.count++;
			}
		}
	}
);
