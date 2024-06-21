import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Categories from "@/views/Categories.vue";
import Cart from "@/views/TheCart.vue";
import CategoryDetails from "@/views/CategoryDetails.vue";
import ProductDetails from "@/views/ProductDetails.vue";

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
        path: '/categories/:categoryId/:productId',
        name: 'ProductDetails',
        component: ProductDetails
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
