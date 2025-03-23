import { createRouter, createWebHistory } from "vue-router";
import Auth from "../pages/Auth.vue";
import Dashboard from "../pages/Dashboard.vue";
import { auth } from "../firebase.js";

const routes = [
    { path: "/", component: Auth },
    { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                next();
            } else {
                next("/");
            }
        });
    } else {
        next();
    }
});

export default router;