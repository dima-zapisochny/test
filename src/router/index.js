import { createRouter, createWebHistory } from 'vue-router'
import { HomePage, RestaurantPage } from '../components/pages/index.js';

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