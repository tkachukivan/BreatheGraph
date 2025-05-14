// https://nuxt.com/docs/api/configuration/nuxt-config
import { ThemePreset } from './primevue.theme';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxt/icon', '@primevue/nuxt-module', '@pinia/nuxt', '@nuxt/fonts'],
    app: {
        head: {
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
        },
    },
    ssr: false,
    css: ['primeicons/primeicons.css'],
    primevue: {
        options: { theme: { preset: ThemePreset, options: { darkModeSelector: '.dark-theme-on' } } },
        components: { prefix: 'Prime' },
    },
});
