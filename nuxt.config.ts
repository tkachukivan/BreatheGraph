// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxt/icon', '@primevue/nuxt-module', '@pinia/nuxt', '@nuxt/fonts'],
    primevue: { options: { theme: { preset: Aura } }, components: { prefix: 'Prime' } },
});
