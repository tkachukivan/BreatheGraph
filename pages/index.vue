<template>
    <div>
        <div class="main-content">
            <div class="p-grid p-justify-center p-mt-6">
                <div v-for="app in apps" :key="app.title" class="p-col-12 p-md-8">
                    <router-link :to="app.route" class="card-link">
                        <PrimePanel>
                            <div class="card-content-row">
                                <div class="card-icon">
                                    <i :class="app.icon" style="font-size: 3.5rem; color: #42a5f5" />
                                </div>
                                <div class="card-info">
                                    <div class="card-title">{{ app.title }}</div>
                                    <div class="card-description">{{ app.description }}</div>
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
    import { useAppsStore } from '@/store/appsListStore';
    const { apps } = useAppsStore();
</script>

<style scoped>
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
