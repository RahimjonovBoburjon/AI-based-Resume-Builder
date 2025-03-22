import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Dashboard from '../pages/Dashboard.vue';
import Auth from '../pages/Auth.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/auth', component: Auth }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;