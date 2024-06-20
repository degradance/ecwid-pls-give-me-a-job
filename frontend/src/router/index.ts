import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Categories from "@/views/Categories.vue";
import Cart from "@/views/Cart.vue";
import CategoryDetails from "@/views/CategoryDetails.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/categories'
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/categories/:id',
        name: 'CategoryDetails',
        component: CategoryDetails
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
