import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Cart from "@/views/TheCart.vue";
import CategoryDetails from "@/views/CategoryDetails.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import TheHomepage from "@/views/TheHomepage.vue";
import TheCart from "@/views/TheCart.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Homepage',
        component: TheHomepage
    },
    {
        path: '/categories/:id',
        name: 'CategoryDetails',
        component: CategoryDetails
    },
    {
        path: '/categories/:categoryId/:productId',
        name: 'ProductDetails',
        component: ProductDetails
    },
    {
        path: '/cart',
        name: 'Cart',
        component: TheCart
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
