import { createRouter, createWebHistory } from 'vue-router'
import { HomePage, RestaurantPage } from '../src/components/pages';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/restaurant/:id',
            name: 'restaurant',
            component: RestaurantPage
        }
    ]
});