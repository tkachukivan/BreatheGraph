<template>
    <div>
        <PrimeMenubar :model="menuItems">
            <template #item="{ item, props }">
                <router-link v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </a>
                </router-link>
            </template>
            <template #end>
                <PrimeButton
                    :icon="darkMode ? 'pi pi-moon' : 'pi pi-sun'"
                    severity="contrast"
                    @click="toggleDarkMode()"
                />
            </template>
        </PrimeMenubar>
        <div class="main-content">
            <NuxtPage />
        </div>
    </div>
</template>
<script setup>
    import { defineModel } from 'vue';
    import { useAppsStore } from '@/store/appsListStore';

    const darkMode = defineModel('darkMode', { type: Boolean, default: localStorage.getItem('dark-mode') === 'true' });
    const { menuItems } = useAppsStore();

    function toggleDarkMode() {
        darkMode.value = !darkMode.value;
        document.documentElement.classList.toggle('dark-theme-on', darkMode.value);
        localStorage.setItem('dark-mode', darkMode.value);
    }

    onMounted(() => {
        const initialValue = localStorage.getItem('dark-mode')
            ? localStorage.getItem('dark-mode') === 'true'
            : window?.matchMedia('(prefers-color-scheme: dark)')?.matches;

        document.documentElement.classList.toggle('dark-theme-on', initialValue);
    });
</script>
<style lang="css">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 14px;
    }

    .main-content {
        padding: 2rem;
    }
</style>
