<template>
    <div>
        <PrimeMenubar :model="menuItems" class="main-menubar">
            <template #end>
                <PrimeButton
                    :icon="darkMode ? 'pi pi-moon' : 'pi pi-sun'"
                    severity="contrast"
                    @click="toggleDarkMode()"
                />
            </template>
        </PrimeMenubar>
        <div class="main-content">
            <div class="p-grid p-justify-center p-mt-6">
                <div v-for="card in cards" :key="card.title" class="p-col-12 p-md-8">
                    <router-link :to="card.route" class="card-link">
                        <PrimePanel>
                            <div class="card-content-row">
                                <div class="card-icon">
                                    <i :class="card.icon" style="font-size: 3.5rem; color: #42a5f5" />
                                </div>
                                <div class="card-info">
                                    <div class="card-title">{{ card.title }}</div>
                                    <div class="card-description">{{ card.description }}</div>
                                </div>
                            </div>
                        </PrimePanel>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, defineModel } from 'vue';

    const darkMode = defineModel('darkMode', { type: Boolean, default: localStorage.getItem('dark-mode') === 'true' });

    function toggleDarkMode() {
        darkMode.value = !darkMode.value;
        document.documentElement.classList.toggle('dark-theme-on', darkMode.value);
        localStorage.setItem('dark-mode', darkMode.value);
    }

    const cards = ref([
        {
            title: 'Peak Flow Tracker',
            description: 'Monitor your peak flow readings and track your lung function over time.',
            icon: 'pi pi-chart-line',
            route: '/peak-flow',
        },
        {
            title: 'Asthma Control Log',
            description: 'Log your symptoms and triggers to assess your asthma control.',
            icon: 'pi pi-list',
            route: '/asthma-log',
        },
        {
            title: 'Medication Log',
            description: 'Keep a record of your medication usage and reminders.',
            icon: 'pi pi-briefcase',
            route: '/medication-log',
        },
    ]);

    const menuItems = [
        { label: 'Home', icon: 'pi pi-home', to: '/' },
        ...cards.value.map((card) => ({ label: card.title, icon: card.icon, to: card.route })),
    ];

    onMounted(() => {
        document.documentElement.classList.toggle('dark-theme-on', localStorage.getItem('dark-mode') === 'true');
    });
</script>

<style scoped>
    .main-menubar {
        margin-bottom: 2rem;
    }
    .main-content {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .card-link {
        text-decoration: none;
        color: inherit;
        display: block;
        transition: transform 0.1s;
        margin-bottom: 16px;
    }
    .card-link:hover {
        transform: translateY(-4px) scale(1.03);
    }
    .card-content-row {
        display: flex;
        align-items: center;
        min-height: 150px;
    }
    .card-icon {
        flex: 0 0 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2rem;
    }
    .card-info {
        flex: 1;
    }
    .card-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    .card-description {
        font-size: 1.1rem;
        color: #555;
    }
</style>
