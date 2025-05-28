import { defineStore } from 'pinia';

const apps = [
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
];

const menuItems = [
    { label: 'Home', icon: 'pi pi-home', route: '/' },
    ...apps.map(({ title, icon, route }) => ({ label: title, icon, route })),
];

export const useAppsStore = defineStore('apps', { state: () => ({ apps, menuItems }) });
