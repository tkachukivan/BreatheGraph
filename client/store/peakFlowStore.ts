import { defineStore } from 'pinia';

export const peakFlowStore = defineStore('peakFlow', {
    state: () => ({ peakFlow: 0 }),
    actions: {
        setPeakFlow(value: number) {
            this.peakFlow = value;
        },
    },
});
